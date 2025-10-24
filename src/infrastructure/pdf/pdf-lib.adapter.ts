// Infrastructure: pdf-lib adapter for PDF generation

import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { AssignmentCover } from '@/core/entities/AssignmentCover';
import { IPdfGenerator } from '@/core/services/pdfGenerator';
import { TemplateSelector, TemplateType } from '@/core/services/templateSelector';
import * as fs from 'fs';
import * as path from 'path';

export class PdfLibAdapter implements IPdfGenerator {
  private templateSelector = new TemplateSelector();

  async generatePdf(cover: AssignmentCover, template: string = 'default'): Promise<Uint8Array> {
    try {
      const pdfDoc = await PDFDocument.create();
      // A4 size: 210mm x 297mm = 595.28pt x 841.89pt
      const page = pdfDoc.addPage([595.28, 841.89]);
      const { width, height } = page.getSize();

      console.log('Creating PDF with dimensions:', width, 'x', height);

      // Get template config
      const templateConfig = this.templateSelector.getTemplate(template as TemplateType);

      // Load fonts
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
      const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
      const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      // Parse colors
      const primaryColor = this.hexToRgb(templateConfig.colors.primary);
      const secondaryColor = this.hexToRgb(templateConfig.colors.secondary);
      const accentColor = this.hexToRgb(templateConfig.colors.accent);

      let yPosition = height - 80;

      // University Logo (if provided)
      if (cover.universityLogo) {
        try {
          // Read logo from public folder using file system
          const logoPath = cover.universityLogo.startsWith('/') 
            ? cover.universityLogo.substring(1) // Remove leading slash
            : cover.universityLogo;
          
          const fullLogoPath = path.join(process.cwd(), 'public', logoPath);
          
          if (fs.existsSync(fullLogoPath)) {
            const logoBytes = fs.readFileSync(fullLogoPath);
            
            // Embed logo based on file type
            let logoImage;
            if (logoPath.endsWith('.png')) {
              logoImage = await pdfDoc.embedPng(logoBytes);
            } else if (logoPath.endsWith('.jpg') || logoPath.endsWith('.jpeg')) {
              logoImage = await pdfDoc.embedJpg(logoBytes);
            }
            
            if (logoImage) {
              const logoSize = 60;
              const logoDims = logoImage.scale(logoSize / logoImage.width);
              
              page.drawImage(logoImage, {
                x: (width - logoDims.width) / 2,
                y: yPosition - logoDims.height,
                width: logoDims.width,
                height: logoDims.height,
              });
              yPosition -= logoDims.height + 20;
            } else {
              yPosition -= 20;
            }
          } else {
            console.warn('Logo file not found:', fullLogoPath);
            yPosition -= 20;
          }
        } catch (error) {
          console.error('Error embedding logo:', error);
          yPosition -= 20;
        }
      } else {
        yPosition -= 20;
      }

      // University Name
      const universityNameWidth = helveticaBold.widthOfTextAtSize(cover.universityName, 18);
      page.drawText(cover.universityName, {
        x: (width - universityNameWidth) / 2,
        y: yPosition,
        size: 18,
        font: helveticaBold,
        color: primaryColor,
      });
      yPosition -= 30;

      // School header
      const schoolText = cover.school;
      const schoolWidth = timesRomanFont.widthOfTextAtSize(schoolText, 14);
      page.drawText(schoolText, {
        x: (width - schoolWidth) / 2,
        y: yPosition,
        size: 14,
        font: timesRomanFont,
        color: secondaryColor,
      });
      yPosition -= 25;

      // Department/Program - Show program if exists, otherwise department
      const deptText = cover.program || cover.department;
      const deptWidth = timesRomanFont.widthOfTextAtSize(deptText, 12);
      page.drawText(deptText, {
        x: (width - deptWidth) / 2,
        y: yPosition,
        size: 12,
        font: timesRomanFont,
        color: secondaryColor,
      });
      yPosition -= 50;

      // Course Name and Code
      const courseTitle = `${cover.courseName} (${cover.courseCode})`;
      const courseTitleWidth = timesRomanBold.widthOfTextAtSize(courseTitle, templateConfig.fonts.title);
      page.drawText(courseTitle, {
        x: (width - courseTitleWidth) / 2,
        y: yPosition,
        size: templateConfig.fonts.title,
        font: timesRomanBold,
        color: primaryColor,
      });
      yPosition -= 50;

      // Assignment Title
      const assignmentTitleWidth = helveticaBold.widthOfTextAtSize(cover.assignmentTitle, 20);
      page.drawText(cover.assignmentTitle, {
        x: (width - assignmentTitleWidth) / 2,
        y: yPosition,
        size: 20,
        font: helveticaBold,
        color: accentColor,
      });
      yPosition -= 80;

      // Left column - Submitted To
      const leftX = 100;
      page.drawText('SUBMITTED TO :', {
        x: leftX,
        y: yPosition,
        size: templateConfig.fonts.heading,
        font: timesRomanBold,
        color: primaryColor,
      });
      yPosition -= 30;

      page.drawText(cover.submittedTo, {
        x: leftX,
        y: yPosition,
        size: templateConfig.fonts.body,
        font: timesRomanFont,
        color: secondaryColor,
      });
      yPosition -= 25;

      page.drawText(cover.department, {
        x: leftX,
        y: yPosition,
        size: templateConfig.fonts.body,
        font: timesRomanFont,
        color: secondaryColor,
      });
      yPosition -= 25;

      page.drawText(cover.school, {
        x: leftX,
        y: yPosition,
        size: templateConfig.fonts.body,
        font: timesRomanFont,
        color: secondaryColor,
      });
      yPosition -= 25;

      page.drawText(cover.universityName, {
        x: leftX,
        y: yPosition,
        size: templateConfig.fonts.body,
        font: timesRomanFont,
        color: secondaryColor,
      });
      yPosition -= 60;

      // Right column - Submitted By
      const rightX = width - 300;
      let rightY = height - 360;
      
      page.drawText('SUBMITTED BY :', {
        x: rightX,
        y: rightY,
        size: templateConfig.fonts.heading,
        font: timesRomanBold,
        color: primaryColor,
      });
      rightY -= 30;

      page.drawText(cover.submittedBy, {
        x: rightX,
        y: rightY,
        size: templateConfig.fonts.body,
        font: timesRomanFont,
        color: secondaryColor,
      });
      rightY -= 25;

      page.drawText(`Id : ${cover.studentId}`, {
        x: rightX,
        y: rightY,
        size: templateConfig.fonts.body,
        font: timesRomanFont,
        color: secondaryColor,
      });
      rightY -= 25;

      page.drawText(`Department : ${cover.department}`, {
        x: rightX,
        y: rightY,
        size: templateConfig.fonts.body,
        font: timesRomanFont,
        color: secondaryColor,
      });
      rightY -= 25;

      page.drawText(`Section : ${cover.section}`, {
        x: rightX,
        y: rightY,
        size: templateConfig.fonts.body,
        font: timesRomanFont,
        color: secondaryColor,
      });
      rightY -= 25;

      page.drawText(`Trimester : ${cover.trimester}`, {
        x: rightX,
        y: rightY,
        size: templateConfig.fonts.body,
        font: timesRomanFont,
        color: secondaryColor,
      });

      // Submission Date at bottom
      const submissionText = `SUBMISSION DATE : ${cover.submissionDate}`;
      const submissionWidth = timesRomanBold.widthOfTextAtSize(submissionText, 14);
      page.drawText(submissionText, {
        x: (width - submissionWidth) / 2,
        y: 100,
        size: 14,
        font: timesRomanBold,
        color: accentColor,
      });

      // Return PDF as bytes
      const pdfBytes = await pdfDoc.save();
      console.log('PDF generated successfully, size:', pdfBytes.length, 'bytes');
      return pdfBytes;
    } catch (error) {
      console.error('Error in PdfLibAdapter.generatePdf:', error);
      throw new Error(`PDF generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private hexToRgb(hex: string): ReturnType<typeof rgb> {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
      return rgb(0, 0, 0);
    }
    return rgb(
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255
    );
  }
}
