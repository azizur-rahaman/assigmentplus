// Use Case: Generate Assignment Cover

import { AssignmentCover } from '../entities/AssignmentCover';
import { PdfGeneratorService } from '../services/pdfGenerator';
import { CoverData } from '@/types/cover';

export class GenerateCoverUseCase {
  constructor(private readonly pdfGenerator: PdfGeneratorService) {}

  async execute(data: CoverData, template: string = 'default'): Promise<Uint8Array> {
    // Create entity from input data
    const cover = new AssignmentCover(
      data.universityName,
      data.school,
      data.department,
      data.courseName,
      data.courseCode,
      data.assignmentTitle,
      data.submittedTo,
      data.submittedBy,
      data.studentId,
      data.section,
      data.trimester,
      data.submissionDate,
      data.universityLogo,
      data.program
    );

    // Generate PDF using the service
    return this.pdfGenerator.generate(cover, template);
  }
}
