// Interface Adapter: Generate Cover - connects UI/API to use case

import { GenerateCoverUseCase } from '@/core/usecases/generateCover';
import { PdfGeneratorService } from '@/core/services/pdfGenerator';
import { PdfLibAdapter } from '@/infrastructure/pdf/pdf-lib.adapter';
import { CoverData, GenerateCoverResponse } from '@/types/cover';

export class GenerateCoverAdapter {
  private useCase: GenerateCoverUseCase;

  constructor() {
    // Dependency injection - wire up the layers
    const pdfAdapter = new PdfLibAdapter();
    const pdfService = new PdfGeneratorService(pdfAdapter);
    this.useCase = new GenerateCoverUseCase(pdfService);
  }

  async generateCover(data: CoverData, template?: string): Promise<GenerateCoverResponse> {
    try {
      const pdfBytes = await this.useCase.execute(data, template);
      // Create blob from Uint8Array - use Array.from for type safety
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
