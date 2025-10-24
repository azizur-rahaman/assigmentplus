// API Route: POST /api/generate - Generate cover page

import { NextRequest, NextResponse } from 'next/server';
import { GenerateCoverUseCase } from '@/core/usecases/generateCover';
import { PdfGeneratorService } from '@/core/services/pdfGenerator';
import { PdfLibAdapter } from '@/infrastructure/pdf/pdf-lib.adapter';
import { CoverData } from '@/types/cover';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, template = 'default' } = body as { data: CoverData; template?: string };

    console.log('Received request:', { data, template });

    // Validate required fields
    if (!data) {
      console.error('Missing cover data');
      return NextResponse.json(
        { success: false, error: 'Missing cover data' },
        { status: 400 }
      );
    }

    // Wire up dependencies (could be moved to a factory)
    const pdfAdapter = new PdfLibAdapter();
    const pdfService = new PdfGeneratorService(pdfAdapter);
    const useCase = new GenerateCoverUseCase(pdfService);

    console.log('Executing use case...');
    
    // Execute use case
    const pdfBytes = await useCase.execute(data, template);

    console.log('PDF generated successfully, size:', pdfBytes.length, 'bytes');

    // Return PDF as response (convert Uint8Array to Buffer)
    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="assignment-cover-${data.studentId}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating cover:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate cover';
    console.error('Error details:', errorMessage);
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
