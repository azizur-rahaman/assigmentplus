// Shared Utility: Validators

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidatableCoverData {
  universityId?: string;
  schoolId?: string;
  departmentId?: string;
  courseId?: string;
  courseName?: string;
  courseCode?: string;
  assignmentTitle?: string;
  submittedTo?: string;
  submittedBy?: string;
  studentId?: string;
  school?: string;
  department?: string;
  section?: string;
  trimester?: string;
  submissionDate?: string;
}

export function validateCoverData(data: Partial<ValidatableCoverData>): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.universityId?.trim()) {
    errors.push({ field: 'universityId', message: 'University is required' });
  }

  if (!data.schoolId?.trim()) {
    errors.push({ field: 'schoolId', message: 'School is required' });
  }

  if (!data.departmentId?.trim()) {
    errors.push({ field: 'departmentId', message: 'Department is required' });
  }

  if (!data.courseId?.trim()) {
    errors.push({ field: 'courseId', message: 'Course is required' });
  }
  
  if (!data.courseName?.trim()) {
    errors.push({ field: 'courseName', message: 'Course name is required' });
  }
  
  if (!data.courseCode?.trim()) {
    errors.push({ field: 'courseCode', message: 'Course code is required' });
  }
  
  if (!data.assignmentTitle?.trim()) {
    errors.push({ field: 'assignmentTitle', message: 'Assignment title is required' });
  }
  
  if (!data.submittedTo?.trim()) {
    errors.push({ field: 'submittedTo', message: 'Submitted to is required' });
  }
  
  if (!data.submittedBy?.trim()) {
    errors.push({ field: 'submittedBy', message: 'Submitted by is required' });
  }
  
  if (!data.studentId?.trim()) {
    errors.push({ field: 'studentId', message: 'Student ID is required' });
  }
  
  if (!data.school?.trim()) {
    errors.push({ field: 'school', message: 'School is required' });
  }
  
  if (!data.department?.trim()) {
    errors.push({ field: 'department', message: 'Department is required' });
  }
  
  if (!data.section?.trim()) {
    errors.push({ field: 'section', message: 'Section is required' });
  }
  
  if (!data.trimester?.trim()) {
    errors.push({ field: 'trimester', message: 'Trimester is required' });
  }
  
  if (!data.submissionDate?.trim()) {
    errors.push({ field: 'submissionDate', message: 'Submission date is required' });
  }

  return errors;
}
