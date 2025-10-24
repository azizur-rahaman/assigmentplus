// Shared TypeScript types for assignment cover generation

export interface CoverData {
  // University & Department
  universityId: string;
  universityName: string;
  departmentId: string;
  department: string;
  
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
