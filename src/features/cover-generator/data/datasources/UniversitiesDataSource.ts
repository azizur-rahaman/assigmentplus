/**
 * Universities Data Source
 * Loads university data from JSON files
 */

import uiuData from './json/uiu.json';
import duData from './json/du.json';
import buetData from './json/buet.json';
import nsuData from './json/nsu.json';
import bracData from './json/brac.json';
import diuData from './json/diu.json';

// Type definitions
export interface University {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  schools: School[];
}

export interface School {
  id: string;
  name: string;
  shortName: string;
  departments: Department[];
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  programs?: Program[];
  courses?: Course[];
}

export interface Program {
  id: string;
  name: string;
  shortName: string;
  courses: Course[];
}

export interface Course {
  id: string;
  code: string;
  name: string;
  instructors: string[];
}

export interface Instructor {
  id: string;
  name: string;
  designation: string;
}

/**
 * Universities DataSource
 * Manages university data loaded from JSON files
 */
class UniversitiesDataSource {
  private universities: University[];

  constructor() {
    // Load all university data from JSON files
    this.universities = [
      uiuData,
      duData,
      buetData,
      nsuData,
      bracData,
      diuData,
    ] as University[];
  }

  /**
   * Get all universities
   */
  getAllUniversities(): University[] {
    return this.universities;
  }

  /**
   * Get a university by ID
   */
  getUniversityById(id: string): University | undefined {
    return this.universities.find((uni) => uni.id === id);
  }

  /**
   * Get a school by university ID and school ID
   */
  getSchoolById(universityId: string, schoolId: string): School | undefined {
    const university = this.getUniversityById(universityId);
    return university?.schools.find((school) => school.id === schoolId);
  }

  /**
   * Get a department by university, school, and department ID
   */
  getDepartmentById(
    universityId: string,
    schoolId: string,
    departmentId: string
  ): Department | undefined {
    const school = this.getSchoolById(universityId, schoolId);
    return school?.departments.find((dept) => dept.id === departmentId);
  }

  /**
   * Get a program by university, school, department, and program ID
   */
  getProgramById(
    universityId: string,
    schoolId: string,
    departmentId: string,
    programId: string
  ): Program | undefined {
    const department = this.getDepartmentById(universityId, schoolId, departmentId);
    return department?.programs?.find((program) => program.id === programId);
  }

  /**
   * Get a course by ID
   */
  getCourseById(
    universityId: string,
    schoolId: string,
    departmentId: string,
    courseId: string,
    programId?: string
  ): Course | undefined {
    const department = this.getDepartmentById(universityId, schoolId, departmentId);
    
    // If department has programs, search within the program
    if (department?.programs && programId) {
      const program = department.programs.find((prog) => prog.id === programId);
      return program?.courses.find((course) => course.id === courseId);
    }
    
    // If department has direct courses
    return department?.courses?.find((course) => course.id === courseId);
  }

  /**
   * Get all schools for a university
   */
  getSchoolsByUniversity(universityId: string): School[] {
    const university = this.getUniversityById(universityId);
    return university?.schools || [];
  }

  /**
   * Get all departments for a school
   */
  getDepartmentsBySchool(universityId: string, schoolId: string): Department[] {
    const school = this.getSchoolById(universityId, schoolId);
    return school?.departments || [];
  }

  /**
   * Get all programs for a department
   */
  getProgramsByDepartment(
    universityId: string,
    schoolId: string,
    departmentId: string
  ): Program[] {
    const department = this.getDepartmentById(universityId, schoolId, departmentId);
    return department?.programs || [];
  }

  /**
   * Get all courses for a department (without programs)
   */
  getCoursesByDepartment(
    universityId: string,
    schoolId: string,
    departmentId: string
  ): Course[] {
    const department = this.getDepartmentById(universityId, schoolId, departmentId);
    return department?.courses || [];
  }

  /**
   * Get all courses for a program
   */
  getCoursesByProgram(
    universityId: string,
    schoolId: string,
    departmentId: string,
    programId: string
  ): Course[] {
    const program = this.getProgramById(universityId, schoolId, departmentId, programId);
    return program?.courses || [];
  }

  /**
   * Check if a department has programs
   */
  departmentHasPrograms(
    universityId: string,
    schoolId: string,
    departmentId: string
  ): boolean {
    const department = this.getDepartmentById(universityId, schoolId, departmentId);
    return !!department?.programs && department.programs.length > 0;
  }
}

// Create and export a singleton instance
const universitiesDataSource = new UniversitiesDataSource();

export default universitiesDataSource;

// Export helper functions for backward compatibility
export const getAllUniversities = () => universitiesDataSource.getAllUniversities();
export const getUniversityById = (id: string) => universitiesDataSource.getUniversityById(id);
export const getSchoolById = (universityId: string, schoolId: string) =>
  universitiesDataSource.getSchoolById(universityId, schoolId);
export const getDepartmentById = (universityId: string, schoolId: string, departmentId: string) =>
  universitiesDataSource.getDepartmentById(universityId, schoolId, departmentId);
export const getProgramById = (
  universityId: string,
  schoolId: string,
  departmentId: string,
  programId: string
) => universitiesDataSource.getProgramById(universityId, schoolId, departmentId, programId);
export const getCourseById = (
  universityId: string,
  schoolId: string,
  departmentId: string,
  courseId: string,
  programId?: string
) => universitiesDataSource.getCourseById(universityId, schoolId, departmentId, courseId, programId);
export const getSchoolsByUniversity = (universityId: string) =>
  universitiesDataSource.getSchoolsByUniversity(universityId);
export const getDepartmentsBySchool = (universityId: string, schoolId: string) =>
  universitiesDataSource.getDepartmentsBySchool(universityId, schoolId);
export const getProgramsByDepartment = (
  universityId: string,
  schoolId: string,
  departmentId: string
) => universitiesDataSource.getProgramsByDepartment(universityId, schoolId, departmentId);
export const getCoursesByDepartment = (
  universityId: string,
  schoolId: string,
  departmentId: string
) => universitiesDataSource.getCoursesByDepartment(universityId, schoolId, departmentId);
export const getCoursesByProgram = (
  universityId: string,
  schoolId: string,
  departmentId: string,
  programId: string
) => universitiesDataSource.getCoursesByProgram(universityId, schoolId, departmentId, programId);
export const departmentHasPrograms = (
  universityId: string,
  schoolId: string,
  departmentId: string
) => universitiesDataSource.departmentHasPrograms(universityId, schoolId, departmentId);
