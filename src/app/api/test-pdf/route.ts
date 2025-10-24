// Test route to verify PDF generation works

import { NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function GET() {
  try {
    // Create a simple test PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 size in points
    
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    
    page.drawText('Test PDF - A4 Size', {
      x: 50,
      y: 800,
      size: 30,
      font: font,
      color: rgb(0, 0, 0),
    });
    
    page.drawText('Width: 595.28pt (210mm)', {
      x: 50,
      y: 750,
      size: 16,
      font: font,
    });
    
    page.drawText('Height: 841.89pt (297mm)', {
      x: 50,
      y: 720,
      size: 16,
      font: font,
    });

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="test.pdf"',
      },
    });
  } catch (error) {
    console.error('Test PDF error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create test PDF' },
      { status: 500 }
    );
  }
}
