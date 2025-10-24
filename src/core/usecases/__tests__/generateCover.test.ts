// Test: Generate Cover Use Case

import { AssignmentCover } from '@/core/entities/AssignmentCover';
import { GenerateCoverUseCase } from '@/core/usecases/generateCover';
import { PdfGeneratorService, IPdfGenerator } from '@/core/services/pdfGenerator';

// Mock PDF Generator
class MockPdfGenerator implements IPdfGenerator {
  async generatePdf(cover: AssignmentCover, template?: string): Promise<Uint8Array> {
    // Return dummy PDF bytes
    return new Uint8Array([37, 80, 68, 70]); // "%PDF" header
  }
}

describe('GenerateCoverUseCase', () => {
  let useCase: GenerateCoverUseCase;

  beforeEach(() => {
    const mockAdapter = new MockPdfGenerator();
    const pdfService = new PdfGeneratorService(mockAdapter);
    useCase = new GenerateCoverUseCase(pdfService);
  });

  test('should generate PDF with valid data', async () => {
    const coverData = {
      universityId: 'uiu',
      universityName: 'United International University',
      schoolId: 'sbe',
      school: 'School of Business and Economics',
      departmentId: 'bba',
      department: 'Bachelor of Business Administration (BBA)',
      courseId: 'bmt2113',
      courseName: 'Business Mathematics II',
      courseCode: 'BMT 2113',
      assignmentTitle: 'ASSIGNMENT - 1',
      submittedTo: 'Mosabbir Ahmed',
      submittedBy: 'Kaspia Tasmim Trisha',
      studentId: '1112420167',
      section: 'B',
      trimester: 'Summer 2025',
      submissionDate: '06.09.2025',
    };

    const result = await useCase.execute(coverData, 'default');

    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toBeGreaterThan(0);
  });

  test('should throw error with missing required fields', async () => {
    const invalidData = {
      universityId: 'uiu',
      universityName: 'United International University',
      schoolId: 'sbe',
      school: 'School of Business and Economics',
      departmentId: 'bba',
      department: 'Bachelor of Business Administration (BBA)',
      courseId: 'bmt2113',
      courseName: '',
      courseCode: 'BMT 2113',
      assignmentTitle: 'ASSIGNMENT - 1',
      submittedTo: 'Mosabbir Ahmed',
      submittedBy: 'Kaspia Tasmim Trisha',
      studentId: '1112420167',
      section: 'B',
      trimester: 'Summer 2025',
      submissionDate: '06.09.2025',
    };

    await expect(useCase.execute(invalidData, 'default')).rejects.toThrow('Course name is required');
  });

  test('should throw error with empty student ID', async () => {
    const invalidData = {
      universityId: 'uiu',
      universityName: 'United International University',
      schoolId: 'sbe',
      school: 'School of Business and Economics',
      departmentId: 'bba',
      department: 'Bachelor of Business Administration (BBA)',
      courseId: 'bmt2113',
      courseName: 'Business Mathematics II',
      courseCode: 'BMT 2113',
      assignmentTitle: 'ASSIGNMENT - 1',
      submittedTo: 'Mosabbir Ahmed',
      submittedBy: 'Kaspia Tasmim Trisha',
      studentId: '',
      section: 'B',
      trimester: 'Summer 2025',
      submissionDate: '06.09.2025',
    };

    await expect(useCase.execute(invalidData, 'default')).rejects.toThrow('Student ID is required');
  });
});
