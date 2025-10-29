// Use Case: Generate Assignment Cover

import { AssignmentCover } from '../../domain/entities/AssignmentCover';
import { Template, TemplateType } from '../../domain/value-objects/Template';
import { IPdfGenerator } from '../ports/IPdfGenerator';

export interface CoverData {
  universityName: string;
  school: string;
  department: string;
  courseName: string;
  courseCode: string;
  assignmentTitle: string;
  submittedTo: string;
  submittedBy: string;
  studentId: string;
  section: string;
  trimester: string;
  submissionDate: string;
  universityLogo?: string;
  program?: string;
}

/**
 * Use Case: Generate Assignment Cover
 * 
 * This use case orchestrates the cover generation process:
 * 1. Validates input data by creating domain entity
 * 2. Selects appropriate template
 * 3. Delegates PDF generation to infrastructure
 */
export class GenerateCoverUseCase {
  constructor(private readonly pdfGenerator: IPdfGenerator) {}

  async execute(data: CoverData, templateType: TemplateType = 'default'): Promise<Uint8Array> {
    // Create domain entity (validates automatically)
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

    // Get template configuration
    const template = Template.fromType(templateType);

    // Generate PDF
    return this.pdfGenerator.generate(cover, template);
  }
}
