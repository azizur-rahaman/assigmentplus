// Presentation Controller: Cover Generator Facade

import { GenerateCoverUseCase } from '../domain/usecases/GenerateCoverUseCase';
import type { CoverData } from '../domain/usecases/GenerateCoverUseCase';
import type { TemplateType } from '../domain/value-objects/Template';

export interface GenerateCoverResponse {
  success: boolean;
  pdfUrl?: string;
  pdfBlob?: Blob;
  error?: string;
}

/**
 * Facade/Controller that coordinates the cover generation feature
 * This is the entry point for the presentation layer
 */
export class CoverGeneratorController {
  private useCase: GenerateCoverUseCase;

  constructor() {
    // Lazy load the adapter only on server side to avoid bundling fs module
    // This will be called from API routes, not from client components
    if (typeof window === 'undefined') {
      const { PdfLibAdapter } = require('../data/repositories/PdfLibAdapter');
      this.useCase = new GenerateCoverUseCase(new PdfLibAdapter());
    } else {
      // On client side, we don't instantiate the use case
      // Client should call API routes instead
      this.useCase = null as any;
    }
  }

  async generateCover(data: CoverData, template: TemplateType = 'default'): Promise<GenerateCoverResponse> {
    if (typeof window !== 'undefined') {
      throw new Error('CoverGeneratorController.generateCover should only be called server-side. Use API route instead.');
    }
    
    try {
      const pdfBytes = await this.useCase.execute(data, template);
      
      // Create blob from Uint8Array
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      return {
        success: true,
        pdfUrl: url,
        pdfBlob: blob,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to generate cover',
      };
    }
  }
}
