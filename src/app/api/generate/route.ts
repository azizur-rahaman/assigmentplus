// API Route: POST /api/generate - Generate cover page

import { NextRequest, NextResponse } from 'next/server';
import { CoverGeneratorController } from '@/features/cover-generator';
import type { CoverData } from '@/shared/types';
import type { TemplateType } from '@/features/cover-generator';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, template = 'default' } = body as { data: CoverData; template?: TemplateType };

    console.log('Received request:', { data, template });

    // Validate required fields
    if (!data) {
      console.error('Missing cover data');
      return NextResponse.json(
        { success: false, error: 'Missing cover data' },
        { status: 400 }
      );
    }

    // Use the controller facade
    const controller = new CoverGeneratorController();

    console.log('Generating cover via controller...');
    
    // Generate PDF using use case
    const result = await controller.generateCover(data, template);

    if (!result.success || !result.pdfBlob) {
      console.error('Generation failed:', result.error);
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to generate PDF' },
        { status: 500 }
      );
    }

    console.log('PDF generated successfully');

    // Convert blob to buffer and return
    const arrayBuffer = await result.pdfBlob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new NextResponse(buffer, {
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
