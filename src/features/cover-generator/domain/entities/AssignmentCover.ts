// Domain Entity: Assignment Cover - Pure business logic

export class AssignmentCover {
  constructor(
    public readonly universityName: string,
    public readonly school: string,
    public readonly department: string,
    public readonly courseName: string,
    public readonly courseCode: string,
    public readonly assignmentTitle: string,
    public readonly submittedTo: string,
    public readonly submittedBy: string,
    public readonly studentId: string,
    public readonly section: string,
    public readonly trimester: string,
    public readonly submissionDate: string,
    public readonly universityLogo?: string,
    public readonly program?: string
  ) {
    this.validate();
  }

  private validate(): void {
    if (!this.universityName || this.universityName.trim().length === 0) {
      throw new Error('University name is required');
    }
    if (!this.school || this.school.trim().length === 0) {
      throw new Error('School is required');
    }
    if (!this.department || this.department.trim().length === 0) {
      throw new Error('Department is required');
    }
    if (!this.courseName || this.courseName.trim().length === 0) {
      throw new Error('Course name is required');
    }
    if (!this.courseCode || this.courseCode.trim().length === 0) {
      throw new Error('Course code is required');
    }
    if (!this.assignmentTitle || this.assignmentTitle.trim().length === 0) {
      throw new Error('Assignment title is required');
    }
    if (!this.submittedTo || this.submittedTo.trim().length === 0) {
      throw new Error('Submitted to is required');
    }
    if (!this.submittedBy || this.submittedBy.trim().length === 0) {
      throw new Error('Submitted by is required');
    }
    if (!this.studentId || this.studentId.trim().length === 0) {
      throw new Error('Student ID is required');
    }
    if (!this.section || this.section.trim().length === 0) {
      throw new Error('Section is required');
    }
    if (!this.trimester || this.trimester.trim().length === 0) {
      throw new Error('Trimester is required');
    }
    if (!this.submissionDate || this.submissionDate.trim().length === 0) {
      throw new Error('Submission date is required');
    }
  }

  public toJSON() {
    return {
      universityName: this.universityName,
      school: this.school,
      department: this.department,
      program: this.program,
      courseName: this.courseName,
      courseCode: this.courseCode,
      assignmentTitle: this.assignmentTitle,
      submittedTo: this.submittedTo,
      submittedBy: this.submittedBy,
      studentId: this.studentId,
      section: this.section,
      trimester: this.trimester,
      submissionDate: this.submissionDate,
      universityLogo: this.universityLogo,
    };
  }
}
