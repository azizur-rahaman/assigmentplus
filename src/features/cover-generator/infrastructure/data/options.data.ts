// Data: Common options for form fields

export const SECTIONS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'
] as const;

export const TRIMESTERS = [
  'Spring 2024',
  'Summer 2024',
  'Fall 2024',
  'Spring 2025',
  'Summer 2025',
  'Fall 2025',
  'Spring 2026',
  'Summer 2026',
  'Fall 2026',
] as const;

export const ASSIGNMENT_TYPES = [
  'ASSIGNMENT - 1',
  'ASSIGNMENT - 2',
  'ASSIGNMENT - 3',
  'ASSIGNMENT - 4',
  'ASSIGNMENT - 5',
  'MID TERM ASSIGNMENT',
  'FINAL ASSIGNMENT',
  'PROJECT REPORT',
  'CASE STUDY',
  'TERM PAPER',
  'THESIS',
] as const;

export const DEPARTMENT_CODES = {
  BBA: 'Bachelor of Business Administration',
  CSE: 'Computer Science and Engineering',
  EEE: 'Electrical and Electronic Engineering',
  CE: 'Civil Engineering',
  ME: 'Mechanical Engineering',
  LAW: 'Law',
  ENG: 'English',
  ECO: 'Economics',
  MATH: 'Mathematics',
  PHY: 'Physics',
} as const;

export type Section = typeof SECTIONS[number];
export type Trimester = typeof TRIMESTERS[number];
export type AssignmentType = typeof ASSIGNMENT_TYPES[number];
