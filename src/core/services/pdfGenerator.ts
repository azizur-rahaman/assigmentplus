// Domain service: PDF Generator interface

import { AssignmentCover } from '../entities/AssignmentCover';

export interface IPdfGenerator {
  generatePdf(cover: AssignmentCover, template?: string): Promise<Uint8Array>;
}

export class PdfGeneratorService {
  constructor(private readonly pdfAdapter: IPdfGenerator) {}

  async generate(cover: AssignmentCover, template: string = 'default'): Promise<Uint8Array> {
    return this.pdfAdapter.generatePdf(cover, template);
  }
}
