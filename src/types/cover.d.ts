// Shared TypeScript types for assignment cover generation

export interface CoverData {
  // University, School & Department
  universityId: string;
  universityName: string;
  schoolId: string;
  school: string;
  departmentId: string;
  department: string;
  programId?: string; // Optional: for departments with sub-programs
  program?: string;
  
  // Course Information
  courseId: string;
  courseName: string;
  courseCode: string;
  assignmentTitle: string;
  
  // Submission Details
  submittedTo: string;
  submittedBy: string;
  studentId: string;
  section: string;
  trimester: string;
  
  // Metadata
  submissionDate: string;
  
  // Optional
  universityLogo?: string;
}

export interface GenerateCoverRequest {
  data: CoverData;
  template?: 'default' | 'modern' | 'classic';
}

export interface GenerateCoverResponse {
  success: boolean;
  pdfUrl?: string;
  pdfBlob?: Blob;
  error?: string;
}
