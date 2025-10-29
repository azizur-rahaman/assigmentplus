/**
 * Universities Data Source - Modular Version
 * Loads university data from organized folder structure with lazy loading
 */

import universitiesIndex from './json/index.json';

// Type definitions
export interface University {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  schools?: School[];
}

export interface School {
  id: string;
  name: string;
  shortName: string;
  departments?: Department[];
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
 * Universities DataSource - Modular Edition
 * Dynamically loads university data from folder structure with caching
 */
class UniversitiesDataSource {
  private universitiesIndex: University[];
  private cache: Map<string, any> = new Map();

  constructor() {
    // Load universities index (lightweight)
    this.universitiesIndex = (universitiesIndex as any).universities;
  }

  /**
   * Get all universities (from index - synchronous)
   */
  getAllUniversities(): University[] {
    return this.universitiesIndex;
  }

  /**
   * Get a university by ID (loads metadata dynamically)
   */
  async getUniversityById(id: string): Promise<University | undefined> {
    const cacheKey = `uni:${id}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const metadata = await import(`./json/${id}/metadata.json`);
      const university: University = {
        id: metadata.id,
        name: metadata.name,
        shortName: metadata.shortName,
        logo: metadata.logo,
        schools: metadata.schools || []
      };
      
      this.cache.set(cacheKey, university);
      return university;
    } catch (error) {
      console.error(`Failed to load university ${id}:`, error);
      return undefined;
    }
  }

  /**
   * Get a school by university ID and school ID
   */
  async getSchoolById(universityId: string, schoolId: string): Promise<School | undefined> {
    const cacheKey = `school:${universityId}:${schoolId}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const metadata = await import(`./json/${universityId}/${schoolId}/metadata.json`);
      const school: School = {
        id: metadata.id,
        name: metadata.name,
        shortName: metadata.shortName,
        departments: metadata.departments || []
      };
      
      this.cache.set(cacheKey, school);
      return school;
    } catch (error) {
      console.error(`Failed to load school ${universityId}/${schoolId}:`, error);
      return undefined;
    }
  }

  /**
   * Get a department by university, school, and department ID
   */
  async getDepartmentById(
    universityId: string,
    schoolId: string,
    departmentId: string
  ): Promise<Department | undefined> {
    const cacheKey = `dept:${universityId}:${schoolId}:${departmentId}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const metadata = await import(`./json/${universityId}/${schoolId}/${departmentId}/metadata.json`);
      const courses = await this.getCoursesByDepartment(universityId, schoolId, departmentId);
      
      const department: Department = {
        id: metadata.id,
        name: metadata.name,
        shortName: metadata.shortName,
        courses: courses
      };
      
      this.cache.set(cacheKey, department);
      return department;
    } catch (error) {
      console.error(`Failed to load department ${universityId}/${schoolId}/${departmentId}:`, error);
      return undefined;
    }
  }

  /**
   * Get courses for a department (lazy loaded)
   */
  async getCoursesByDepartment(
    universityId: string,
    schoolId: string,
    departmentId: string
  ): Promise<Course[]> {
    const cacheKey = `courses:${universityId}:${schoolId}:${departmentId}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const courses = await import(`./json/${universityId}/${schoolId}/${departmentId}/courses.json`);
      const coursesList = courses.default || courses;
      
      this.cache.set(cacheKey, coursesList);
      return coursesList;
    } catch (error) {
      console.error(`Failed to load courses for ${universityId}/${schoolId}/${departmentId}:`, error);
      return [];
    }
  }

  /**
   * Get a course by ID
   */
  async getCourseById(
    universityId: string,
    schoolId: string,
    departmentId: string,
    courseId: string,
    programId?: string
  ): Promise<Course | undefined> {
    const courses = await this.getCoursesByDepartment(universityId, schoolId, departmentId);
    return courses.find((course) => course.id === courseId);
  }

  /**
   * Get all schools for a university
   */
  async getSchoolsByUniversity(universityId: string): Promise<School[]> {
    const university = await this.getUniversityById(universityId);
    return university?.schools || [];
  }

  /**
   * Get all departments for a school
   */
  async getDepartmentsBySchool(universityId: string, schoolId: string): Promise<Department[]> {
    const school = await this.getSchoolById(universityId, schoolId);
    return school?.departments || [];
  }

  /**
   * Get all programs for a department (legacy - not used in modular structure)
   */
  async getProgramsByDepartment(
    universityId: string,
    schoolId: string,
    departmentId: string
  ): Promise<Program[]> {
    return [];
  }

  /**
   * Get all courses for a program (legacy - not used in modular structure)
   */
  async getCoursesByProgram(
    universityId: string,
    schoolId: string,
    departmentId: string,
    programId: string
  ): Promise<Course[]> {
    return [];
  }

  /**
   * Get a program by ID (legacy - not used in modular structure)
   */
  async getProgramById(
    universityId: string,
    schoolId: string,
    departmentId: string,
    programId: string
  ): Promise<Program | undefined> {
    return undefined;
  }

  /**
   * Check if a department has programs (always false in modular structure)
   */
  async departmentHasPrograms(
    universityId: string,
    schoolId: string,
    departmentId: string
  ): Promise<boolean> {
    return false;
  }

  /**
   * Clear cache (useful for development/testing)
   */
  clearCache(): void {
    this.cache.clear();
  }
}


// Create and export a singleton instance
const universitiesDataSource = new UniversitiesDataSource();

export default universitiesDataSource;

// Export async helper functions
export const getAllUniversities = () => universitiesDataSource.getAllUniversities();

export const getUniversityById = async (id: string) =>
  await universitiesDataSource.getUniversityById(id);

export const getSchoolById = async (universityId: string, schoolId: string) =>
  await universitiesDataSource.getSchoolById(universityId, schoolId);

export const getDepartmentById = async (universityId: string, schoolId: string, departmentId: string) =>
  await universitiesDataSource.getDepartmentById(universityId, schoolId, departmentId);

export const getProgramById = async (
  universityId: string,
  schoolId: string,
  departmentId: string,
  programId: string
) => await universitiesDataSource.getProgramById(universityId, schoolId, departmentId, programId);

export const getCourseById = async (
  universityId: string,
  schoolId: string,
  departmentId: string,
  courseId: string,
  programId?: string
) => await universitiesDataSource.getCourseById(universityId, schoolId, departmentId, courseId, programId);

export const getSchoolsByUniversity = async (universityId: string) =>
  await universitiesDataSource.getSchoolsByUniversity(universityId);

export const getDepartmentsBySchool = async (universityId: string, schoolId: string) =>
  await universitiesDataSource.getDepartmentsBySchool(universityId, schoolId);

export const getProgramsByDepartment = async (
  universityId: string,
  schoolId: string,
  departmentId: string
) => await universitiesDataSource.getProgramsByDepartment(universityId, schoolId, departmentId);

export const getCoursesByDepartment = async (
  universityId: string,
  schoolId: string,
  departmentId: string
) => await universitiesDataSource.getCoursesByDepartment(universityId, schoolId, departmentId);

export const getCoursesByProgram = async (
  universityId: string,
  schoolId: string,
  departmentId: string,
  programId: string
) => await universitiesDataSource.getCoursesByProgram(universityId, schoolId, departmentId, programId);

export const departmentHasPrograms = async (
  universityId: string,
  schoolId: string,
  departmentId: string
) => await universitiesDataSource.departmentHasPrograms(universityId, schoolId, departmentId);

