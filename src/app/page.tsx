'use client';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { 
  InputField, 
  SelectField, 
  GenerateButton, 
  CoverPreview 
} from '@/features/cover-generator';
import { LocalStorageService } from '@/features/cover-generator';
import type { CoverData } from '@/shared/types';
import { getCurrentDate, validateCoverData } from '@/shared/utils';
import { 
  getAllUniversities, 
  getSchoolsByUniversity,
  getDepartmentsBySchool,
  getProgramsByDepartment,
  getCoursesByDepartment,
  getCoursesByProgram,
  getUniversityById,
  getSchoolById,
  getDepartmentById,
  getProgramById,
  getCourseById,
  departmentHasPrograms,
  type University,
  type School,
  type Department,
  type Program,
  type Course
} from '@/features/cover-generator/data/datasources/UniversitiesDataSource';
import { SECTIONS, TRIMESTERS, ASSIGNMENT_TYPES } from '@/features/cover-generator/data/datasources/options.data';
import { baseUrl, apiBaseUrl } from '@/shared/utils';

const storage = new LocalStorageService();

export default function Home() {
  const [formData, setFormData] = useState<CoverData>({
    universityId: '',
    universityName: '',
    schoolId: '',
    school: '',
    departmentId: '',
    department: '',
    programId: '',
    program: '',
    courseId: '',
    courseName: '',
    courseCode: '',
    assignmentTitle: '',
    submittedTo: '',
    submittedBy: '',
    studentId: '',
    section: '',
    trimester: '',
    submissionDate: getCurrentDate(),
    universityLogo: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  // State for "Other" option selections
  const [showOtherUniversity, setShowOtherUniversity] = useState(false);
  const [showOtherSchool, setShowOtherSchool] = useState(false);
  const [showOtherDepartment, setShowOtherDepartment] = useState(false);
  const [showOtherProgram, setShowOtherProgram] = useState(false);
  const [showOtherCourse, setShowOtherCourse] = useState(false);
  const [showOtherAssignment, setShowOtherAssignment] = useState(false);
  const [showOtherSection, setShowOtherSection] = useState(false);
  const [showOtherTrimester, setShowOtherTrimester] = useState(false);

  // Cascading dropdown options
  const [universities] = useState<University[]>(getAllUniversities());
  const [schools, setSchools] = useState<School[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [instructors, setInstructors] = useState<string[]>([]);
  const [showProgramSelect, setShowProgramSelect] = useState(false);

  // Update schools when university changes
  useEffect(() => {
    if (formData.universityId) {
      const schoolsData = getSchoolsByUniversity(formData.universityId);
      setSchools(schoolsData);
      
      // Update university name and logo
      const uni = getUniversityById(formData.universityId);
      if (uni) {
        setFormData(prev => ({
          ...prev,
          universityName: uni.name,
          universityLogo: uni.logo,
        }));
      }
    } else {
      setSchools([]);
      setDepartments([]);
      setCourses([]);
      setInstructors([]);
    }
  }, [formData.universityId]);

  // Update departments when school changes
  useEffect(() => {
    if (formData.universityId && formData.schoolId) {
      const depts = getDepartmentsBySchool(formData.universityId, formData.schoolId);
      setDepartments(depts);
      
      // Update school name
      const schoolData = getSchoolById(formData.universityId, formData.schoolId);
      if (schoolData) {
        setFormData(prev => ({
          ...prev,
          school: schoolData.name,
        }));
      }
    } else {
      setDepartments([]);
      setPrograms([]);
      setCourses([]);
      setInstructors([]);
    }
  }, [formData.universityId, formData.schoolId]);

  // Update programs/courses when department changes
  useEffect(() => {
    if (formData.universityId && formData.schoolId && formData.departmentId) {
      // Check if department has programs
      const hasPrograms = departmentHasPrograms(formData.universityId, formData.schoolId, formData.departmentId);
      setShowProgramSelect(hasPrograms);
      
      if (hasPrograms) {
        // Load programs
        const programsData = getProgramsByDepartment(formData.universityId, formData.schoolId, formData.departmentId);
        setPrograms(programsData);
        setCourses([]);
      } else {
        // Load courses directly
        const coursesData = getCoursesByDepartment(formData.universityId, formData.schoolId, formData.departmentId);
        setCourses(coursesData);
        setPrograms([]);
      }
      
      // Update department name
      const dept = getDepartmentById(formData.universityId, formData.schoolId, formData.departmentId);
      if (dept) {
        setFormData(prev => ({
          ...prev,
          department: dept.name,
        }));
      }
    } else {
      setPrograms([]);
      setCourses([]);
      setInstructors([]);
      setShowProgramSelect(false);
    }
  }, [formData.universityId, formData.schoolId, formData.departmentId]);

  // Update courses when program changes (for departments with programs)
  useEffect(() => {
    if (formData.universityId && formData.schoolId && formData.departmentId && formData.programId && showProgramSelect) {
      const coursesData = getCoursesByProgram(formData.universityId, formData.schoolId, formData.departmentId, formData.programId);
      setCourses(coursesData);
      
      // Update program name
      const prog = getProgramById(formData.universityId, formData.schoolId, formData.departmentId, formData.programId);
      if (prog) {
        setFormData(prev => ({
          ...prev,
          program: prog.name,
        }));
      }
    } else if (showProgramSelect && !formData.programId) {
      setCourses([]);
      setInstructors([]);
    }
  }, [formData.universityId, formData.schoolId, formData.departmentId, formData.programId, showProgramSelect]);

  // Update instructors when course changes
  useEffect(() => {
    if (formData.universityId && formData.schoolId && formData.departmentId && formData.courseId) {
      const course = getCourseById(
        formData.universityId, 
        formData.schoolId, 
        formData.departmentId, 
        formData.courseId,
        formData.programId
      );
      if (course) {
        setInstructors(course.instructors);
        setFormData(prev => ({
          ...prev,
          courseName: course.name,
          courseCode: course.code,
        }));
      }
    } else {
      setInstructors([]);
    }
  }, [formData.universityId, formData.schoolId, formData.departmentId, formData.courseId, formData.programId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Handle "Other" option selections with cascading behavior
    if (value === 'other') {
      if (name === 'universityId') {
        // If university is "Other", make all subsequent fields custom inputs
        setShowOtherUniversity(true);
        setShowOtherSchool(true);
        setShowOtherDepartment(true);
        setShowOtherProgram(true);
        setShowOtherCourse(true);
        setFormData((prev) => ({
          ...prev,
          universityId: 'other',
          universityName: '',
          universityLogo: '',
          schoolId: 'other',
          school: '',
          departmentId: 'other',
          department: '',
          programId: 'other',
          program: '',
          courseId: 'other',
          courseName: '',
          courseCode: '',
        }));
      } else if (name === 'schoolId') {
        // If school is "Other", make all subsequent fields custom inputs
        setShowOtherSchool(true);
        setShowOtherDepartment(true);
        setShowOtherProgram(true);
        setShowOtherCourse(true);
        setFormData((prev) => ({
          ...prev,
          schoolId: 'other',
          school: '',
          departmentId: 'other',
          department: '',
          programId: 'other',
          program: '',
          courseId: 'other',
          courseName: '',
          courseCode: '',
        }));
      } else if (name === 'departmentId') {
        // If department is "Other", make all subsequent fields custom inputs
        setShowOtherDepartment(true);
        setShowOtherProgram(true);
        setShowOtherCourse(true);
        setFormData((prev) => ({
          ...prev,
          departmentId: 'other',
          department: '',
          programId: 'other',
          program: '',
          courseId: 'other',
          courseName: '',
          courseCode: '',
        }));
      } else if (name === 'programId') {
        // If program is "Other", make all subsequent fields custom inputs
        setShowOtherProgram(true);
        setShowOtherCourse(true);
        setFormData((prev) => ({
          ...prev,
          programId: 'other',
          program: '',
          courseId: 'other',
          courseName: '',
          courseCode: '',
        }));
      } else if (name === 'courseId') {
        setShowOtherCourse(true);
        setFormData((prev) => ({
          ...prev,
          courseId: 'other',
          courseName: '',
          courseCode: '',
        }));
      } else if (name === 'assignmentTitle') {
        setShowOtherAssignment(true);
        setFormData((prev) => ({ ...prev, assignmentTitle: '' }));
      } else if (name === 'section') {
        setShowOtherSection(true);
        setFormData((prev) => ({ ...prev, section: '' }));
      } else if (name === 'trimester') {
        setShowOtherTrimester(true);
        setFormData((prev) => ({ ...prev, trimester: '' }));
      }
    } else {
      // Reset "Other" states when not selecting "Other"
      if (name === 'universityId') {
        setShowOtherUniversity(false);
        setShowOtherSchool(false);
        setShowOtherDepartment(false);
        setShowOtherProgram(false);
        setShowOtherCourse(false);
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          schoolId: '',
          school: '',
          departmentId: '',
          department: '',
          programId: '',
          program: '',
          courseId: '',
          courseName: '',
          courseCode: '',
        }));
      } else if (name === 'schoolId') {
        setShowOtherSchool(false);
        setShowOtherDepartment(false);
        setShowOtherProgram(false);
        setShowOtherCourse(false);
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          departmentId: '',
          department: '',
          programId: '',
          program: '',
          courseId: '',
          courseName: '',
          courseCode: '',
        }));
      } else if (name === 'departmentId') {
        setShowOtherDepartment(false);
        setShowOtherProgram(false);
        setShowOtherCourse(false);
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          programId: '',
          program: '',
          courseId: '',
          courseName: '',
          courseCode: '',
        }));
      } else if (name === 'programId') {
        setShowOtherProgram(false);
        setShowOtherCourse(false);
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          courseId: '',
          courseName: '',
          courseCode: '',
        }));
      } else if (name === 'courseId') {
        setShowOtherCourse(false);
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      } else if (name === 'assignmentTitle') {
        setShowOtherAssignment(false);
        setFormData((prev) => ({ ...prev, [name]: value }));
      } else if (name === 'section') {
        setShowOtherSection(false);
        setFormData((prev) => ({ ...prev, [name]: value }));
      } else if (name === 'trimester') {
        setShowOtherTrimester(false);
        setFormData((prev) => ({ ...prev, [name]: value }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleGenerate = async () => {
    // Validate
    const validationErrors = validateCoverData(formData);
    if (validationErrors.length > 0) {
      const errorMap: Record<string, string> = {};
      validationErrors.forEach((err) => {
        errorMap[err.field] = err.message;
      });
      setErrors(errorMap);
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading('Generating your cover page...');
    
    try {
      console.log('Sending request to generate PDF...', formData);
      
      const response = await fetch(
        `${apiBaseUrl}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData, template: 'default' }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        console.error('Server error:', errorData);
        throw new Error(errorData.error || 'Failed to generate cover');
      }

      const contentType = response.headers.get('content-type');
      console.log('Content-Type:', contentType);

      if (!contentType || !contentType.includes('application/pdf')) {
        const text = await response.text();
        console.error('Unexpected response:', text);
        throw new Error('Server did not return a PDF');
      }

      const blob = await response.blob();
      console.log('PDF blob size:', blob.size);

      if (blob.size === 0) {
        throw new Error('Generated PDF is empty');
      }

      const url = URL.createObjectURL(blob);

      // Download the PDF
      const a = document.createElement('a');
      a.href = url;
      a.download = `assignment-cover-${formData.studentId}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      // Save to localStorage for history
      storage.save('lastCover', formData);

      toast.success('Cover page generated successfully!', { id: loadingToast });
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate cover page. Please try again.';
      toast.error(errorMessage, { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Assignment+</h1>
          <p className="text-gray-600">Generate Professional Assignment Cover Pages</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cover Details</h2>

            {/* University Selection */}
            <SelectField
              label="Select University"
              name="universityId"
              value={formData.universityId}
              onChange={handleSelectChange}
              options={[
                ...universities.map(uni => ({
                  value: uni.id,
                  label: uni.name
                })),
                { value: 'other', label: 'Other (Please specify)' }
              ]}
              placeholder="Choose your university"
              required
              error={errors.universityId}
            />
            
            {/* Custom University Input */}
            {showOtherUniversity && (
              <InputField
                label="University Name"
                name="universityName"
                value={formData.universityName}
                onChange={handleChange}
                placeholder="Enter your university name"
                required
                error={errors.universityName}
              />
            )}

            {/* School Selection */}
            {!showOtherSchool ? (
              <SelectField
                label="Select School/Faculty"
                name="schoolId"
                value={formData.schoolId}
                onChange={handleSelectChange}
                options={[
                  ...schools.map(school => ({
                    value: school.id,
                    label: school.name
                  })),
                  { value: 'other', label: 'Other (Please specify)' }
                ]}
                placeholder="Choose your school"
                required
                error={errors.schoolId}
                disabled={!formData.universityId}
              />
            ) : (
              <InputField
                label="School/Faculty Name"
                name="school"
                value={formData.school}
                onChange={handleChange}
                placeholder="Enter your school/faculty name"
                required
                error={errors.school}
              />
            )}

            {/* Department Selection */}
            {!showOtherDepartment ? (
              <SelectField
                label="Select Department/Program"
                name="departmentId"
                value={formData.departmentId}
                onChange={handleSelectChange}
                options={[
                  ...departments.map(dept => ({
                    value: dept.id,
                    label: dept.name
                  })),
                  { value: 'other', label: 'Other (Please specify)' }
                ]}
                placeholder="Choose your department"
                required
                error={errors.departmentId}
                disabled={!formData.schoolId}
              />
            ) : (
              <InputField
                label="Department/Program Name"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter your department/program name"
                required
                error={errors.department}
              />
            )}

            {/* Program Selection - Only shown if department has programs or if using custom input */}
            {(showProgramSelect || showOtherProgram) && (
              <>
                {!showOtherProgram ? (
                  <SelectField
                    label="Select Program"
                    name="programId"
                    value={formData.programId || ''}
                    onChange={handleSelectChange}
                    options={[
                      ...programs.map(prog => ({
                        value: prog.id,
                        label: prog.name
                      })),
                      { value: 'other', label: 'Other (Please specify)' }
                    ]}
                    placeholder="Choose your program"
                    required
                    error={errors.programId}
                    disabled={!formData.departmentId}
                  />
                ) : (
                  <InputField
                    label="Program Name"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    placeholder="Enter your program name"
                    required
                    error={errors.program}
                  />
                )}
              </>
            )}

            {/* Course Selection */}
            {!showOtherCourse ? (
              <SelectField
                label="Select Course"
                name="courseId"
                value={formData.courseId}
                onChange={handleSelectChange}
                options={[
                  ...courses.map(course => ({
                    value: course.id,
                    label: `${course.code} - ${course.name}`
                  })),
                  { value: 'other', label: 'Other (Please specify)' }
                ]}
                placeholder="Choose your course"
                required
                error={errors.courseId}
                disabled={!showOtherDepartment && !showOtherProgram && (showProgramSelect ? !formData.programId : !formData.departmentId)}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Course Code"
                  name="courseCode"
                  value={formData.courseCode}
                  onChange={handleChange}
                  placeholder="e.g., CSE101"
                  required
                  error={errors.courseCode}
                />
                <InputField
                  label="Course Name"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  placeholder="e.g., Introduction to Programming"
                  required
                  error={errors.courseName}
                />
              </div>
            )}

            {/* Assignment Title */}
            <SelectField
              label="Assignment Title"
              name="assignmentTitle"
              value={formData.assignmentTitle}
              onChange={handleSelectChange}
              options={[
                ...ASSIGNMENT_TYPES.map(type => ({
                  value: type,
                  label: type
                })),
                { value: 'other', label: 'Other (Please specify)' }
              ]}
              placeholder="Select assignment type"
              required
              error={errors.assignmentTitle}
            />
            
            {/* Custom Assignment Title Input */}
            {showOtherAssignment && (
              <InputField
                label="Assignment Title"
                name="assignmentTitle"
                value={formData.assignmentTitle}
                onChange={handleChange}
                placeholder="Enter your assignment title"
                required
                error={errors.assignmentTitle}
              />
            )}

            {/* Instructor Input */}
            <InputField
              label="Submitted To (Instructor)"
              name="submittedTo"
              value={formData.submittedTo}
              onChange={handleChange}
              placeholder="e.g., Dr. Rahman Khan"
              required
              error={errors.submittedTo}
            />

            {/* Student Information */}
            <InputField
              label="Submitted By (Your Name)"
              name="submittedBy"
              value={formData.submittedBy}
              onChange={handleChange}
              placeholder="e.g., Azizur Rahaman"
              required
              error={errors.submittedBy}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Student ID"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="e.g., 1112420167"
                required
                error={errors.studentId}
              />

              <SelectField
                label="Section"
                name="section"
                value={formData.section}
                onChange={handleSelectChange}
                options={[
                  ...SECTIONS.map(sec => ({
                    value: sec,
                    label: `Section ${sec}`
                  })),
                  { value: 'other', label: 'Other (Please specify)' }
                ]}
                placeholder="Select section"
                required
                error={errors.section}
              />
            </div>
            
            {/* Custom Section Input */}
            {showOtherSection && (
              <InputField
                label="Section"
                name="section"
                value={formData.section}
                onChange={handleChange}
                placeholder="Enter your section"
                required
                error={errors.section}
              />
            )}

            <SelectField
              label="Trimester"
              name="trimester"
              value={formData.trimester}
              onChange={handleSelectChange}
              options={[
                ...TRIMESTERS.map(tri => ({
                  value: tri,
                  label: tri
                })),
                { value: 'other', label: 'Other (Please specify)' }
              ]}
              placeholder="Select trimester"
              required
              error={errors.trimester}
            />
            
            {/* Custom Trimester Input */}
            {showOtherTrimester && (
              <InputField
                label="Trimester"
                name="trimester"
                value={formData.trimester}
                onChange={handleChange}
                placeholder="Enter your trimester (e.g., Fall 2024)"
                required
                error={errors.trimester}
              />
            )}

            <InputField
              label="Submission Date"
              name="submissionDate"
              value={formData.submissionDate}
              onChange={handleChange}
              placeholder="DD.MM.YYYY"
              required
              error={errors.submissionDate}
            />

            <div className="mt-6">
              <GenerateButton onClick={handleGenerate} loading={loading} />
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Live Preview</h2>
            <CoverPreview data={formData} />
          </div>
        </div>

        <footer className="text-center mt-8 text-gray-600 text-sm">
<p>© 2025 CG4Academy. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
