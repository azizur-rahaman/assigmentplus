'use client';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import StepIndicator from '@/components/ui/StepIndicator';
import SearchableSelect from '@/components/ui/SearchableSelect';
import ModernInput from '@/components/ui/ModernInput';
import { CoverPreview } from '@/features/cover-generator';
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
import { apiBaseUrl } from '@/shared/utils';

const storage = new LocalStorageService();

const STEPS = [
  { number: 1, title: 'Institution', description: 'University & Department' },
  { number: 2, title: 'Course', description: 'Select Course' },
  { number: 3, title: 'Assignment', description: 'Details' },
  { number: 4, title: 'Personal', description: 'Your Information' },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CoverData>({
    universityId: '',
    universityName: '',
    universityLogo: '',
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
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  
  // Data states
  const [universities] = useState<University[]>(getAllUniversities());
  const [schools, setSchools] = useState<School[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [showProgramSelect, setShowProgramSelect] = useState(false);

  // Load universities and schools when university changes
  useEffect(() => {
    if (formData.universityId && formData.universityId !== 'other') {
      (async () => {
        const schoolsData = await getSchoolsByUniversity(formData.universityId);
        setSchools(schoolsData);
        const uni = await getUniversityById(formData.universityId);
        if (uni) {
          setFormData(prev => ({
            ...prev,
            universityName: uni.name,
            universityLogo: uni.logo || '',
          }));
        }
      })();
    } else {
      setSchools([]);
      setDepartments([]);
      setPrograms([]);
      setCourses([]);
    }
  }, [formData.universityId]);

  // Load departments when school changes
  useEffect(() => {
    if (formData.universityId && formData.schoolId && formData.schoolId !== 'other') {
      (async () => {
        const depts = await getDepartmentsBySchool(formData.universityId, formData.schoolId);
        setDepartments(depts);
        
        const schoolData = await getSchoolById(formData.universityId, formData.schoolId);
        if (schoolData) {
          setFormData(prev => ({
            ...prev,
            school: schoolData.name,
          }));
        }
      })();
    } else {
      setDepartments([]);
      setPrograms([]);
      setCourses([]);
    }
  }, [formData.universityId, formData.schoolId]);

  // Load programs/courses when department changes
  useEffect(() => {
    if (formData.universityId && formData.schoolId && formData.departmentId && formData.departmentId !== 'other') {
      (async () => {
        const hasPrograms = await departmentHasPrograms(
          formData.universityId,
          formData.schoolId,
          formData.departmentId
        );
        setShowProgramSelect(hasPrograms);

        if (hasPrograms) {
          const programsData = await getProgramsByDepartment(
            formData.universityId,
            formData.schoolId,
            formData.departmentId
          );
          setPrograms(programsData);
        } else {
          const coursesData = await getCoursesByDepartment(
            formData.universityId,
            formData.schoolId,
            formData.departmentId
          );
          setCourses(coursesData);
        }

        const dept = await getDepartmentById(
          formData.universityId,
          formData.schoolId,
          formData.departmentId
        );
        if (dept) {
          setFormData(prev => ({
            ...prev,
            department: dept.name,
          }));
        }
      })();
    } else {
      setPrograms([]);
      setCourses([]);
      setShowProgramSelect(false);
    }
  }, [formData.universityId, formData.schoolId, formData.departmentId]);

  // Load courses when program changes
  useEffect(() => {
    if (formData.universityId && formData.schoolId && formData.departmentId && formData.programId && formData.programId !== 'other' && showProgramSelect) {
      (async () => {
        const coursesData = await getCoursesByProgram(formData.universityId, formData.schoolId, formData.departmentId, formData.programId);
        setCourses(coursesData);
        
        const prog = await getProgramById(formData.universityId, formData.schoolId, formData.departmentId, formData.programId);
        if (prog) {
          setFormData(prev => ({
            ...prev,
            program: prog.name,
          }));
        }
      })();
    } else if (showProgramSelect && !formData.programId) {
      setCourses([]);
    }
  }, [formData.universityId, formData.schoolId, formData.departmentId, formData.programId, showProgramSelect]);

  // Load course details
  useEffect(() => {
    if (formData.universityId && formData.schoolId && formData.departmentId && formData.courseId && formData.courseId !== 'other') {
      (async () => {
        const course = await getCourseById(
          formData.universityId, 
          formData.schoolId, 
          formData.departmentId, 
          formData.courseId,
          formData.programId
        );
        if (course) {
          setFormData(prev => ({
            ...prev,
            courseName: course.name,
            courseCode: course.code,
          }));
        }
      })();
    }
  }, [formData.universityId, formData.schoolId, formData.departmentId, formData.courseId, formData.programId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    
    // Handle "Other" selections and cascading resets
    if (name === 'universityId') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        universityName: value === 'other' ? '' : prev.universityName,
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
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        school: value === 'other' ? '' : prev.school,
        departmentId: '',
        department: '',
        programId: '',
        program: '',
        courseId: '',
        courseName: '',
        courseCode: '',
      }));
    } else if (name === 'departmentId') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        department: value === 'other' ? '' : prev.department,
        programId: '',
        program: '',
        courseId: '',
        courseName: '',
        courseCode: '',
      }));
    } else if (name === 'programId') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        program: value === 'other' ? '' : prev.program,
        courseId: '',
        courseName: '',
        courseCode: '',
      }));
    } else if (name === 'courseId') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        courseName: value === 'other' ? '' : prev.courseName,
        courseCode: value === 'other' ? '' : prev.courseCode,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const stepErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.universityId) stepErrors.universityId = 'Please select a university';
      if (formData.universityId === 'other' && !formData.universityName) stepErrors.universityName = 'Please enter university name';
      if (!formData.schoolId) stepErrors.schoolId = 'Please select a school/faculty';
      if (formData.schoolId === 'other' && !formData.school) stepErrors.school = 'Please enter school name';
      if (!formData.departmentId) stepErrors.departmentId = 'Please select a department';
      if (formData.departmentId === 'other' && !formData.department) stepErrors.department = 'Please enter department name';
      if (showProgramSelect && !formData.programId) stepErrors.programId = 'Please select a program';
      if (formData.programId === 'other' && !formData.program) stepErrors.program = 'Please enter program name';
    } else if (step === 2) {
      if (!formData.courseId) stepErrors.courseId = 'Please select a course';
      if (formData.courseId === 'other') {
        if (!formData.courseCode) stepErrors.courseCode = 'Please enter course code';
        if (!formData.courseName) stepErrors.courseName = 'Please enter course name';
      }
    } else if (step === 3) {
      if (!formData.assignmentTitle) stepErrors.assignmentTitle = 'Please enter assignment title';
      if (!formData.submittedTo) stepErrors.submittedTo = 'Please enter instructor name';
    } else if (step === 4) {
      if (!formData.submittedBy) stepErrors.submittedBy = 'Please enter your name';
      if (!formData.studentId) stepErrors.studentId = 'Please enter student ID';
      if (!formData.section) stepErrors.section = 'Please select section';
      if (!formData.trimester) stepErrors.trimester = 'Please select trimester';
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(4)) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading('Generating your cover page...');

    try {
      const response = await fetch(`${apiBaseUrl}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || 'Failed to generate cover');
      }

      const blob = await response.blob();
      if (blob.size === 0) throw new Error('Generated PDF is empty');

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `assignment-cover-${formData.studentId}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      storage.save('lastCover', formData);
      toast.success('Cover page generated successfully!', { id: loadingToast });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate cover page';
      toast.error(errorMessage, { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-slideIn">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Institution Details
              </h2>
              <p className="text-gray-600">Select your university, school, and department</p>
            </div>

            <SearchableSelect
              label="University"
              name="universityId"
              value={formData.universityId}
              onChange={handleSelectChange}
              options={[
                ...universities.map(uni => ({ value: uni.id, label: uni.name })),
                { value: 'other', label: '✏️ Other (Custom)' }
              ]}
              placeholder="Choose your university"
              required
              error={errors.universityId}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />

            {formData.universityId === 'other' && (
              <ModernInput
                label="University Name"
                name="universityName"
                value={formData.universityName}
                onChange={handleChange}
                placeholder="Enter your university name"
                required
                error={errors.universityName}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                }
              />
            )}

            <SearchableSelect
              label="School / Faculty"
              name="schoolId"
              value={formData.schoolId}
              onChange={handleSelectChange}
              options={[
                ...schools.map(school => ({ value: school.id, label: school.name })),
                { value: 'other', label: '✏️ Other (Custom)' }
              ]}
              placeholder="Choose your school or faculty"
              required
              error={errors.schoolId}
              disabled={!formData.universityId}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
            />

            {formData.schoolId === 'other' && (
              <ModernInput
                label="School / Faculty Name"
                name="school"
                value={formData.school}
                onChange={handleChange}
                placeholder="Enter your school or faculty name"
                required
                error={errors.school}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                }
              />
            )}

            <SearchableSelect
              label="Department / Program"
              name="departmentId"
              value={formData.departmentId}
              onChange={handleSelectChange}
              options={[
                ...departments.map(dept => ({ value: dept.id, label: dept.name })),
                { value: 'other', label: '✏️ Other (Custom)' }
              ]}
              placeholder="Choose your department"
              required
              error={errors.departmentId}
              disabled={!formData.schoolId}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />

            {formData.departmentId === 'other' && (
              <ModernInput
                label="Department / Program Name"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter your department or program name"
                required
                error={errors.department}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                }
              />
            )}

            {showProgramSelect && (
              <>
                <SearchableSelect
                  label="Program"
                  name="programId"
                  value={formData.programId || ''}
                  onChange={handleSelectChange}
                  options={[
                    ...programs.map(prog => ({ value: prog.id, label: prog.name })),
                    { value: 'other', label: '✏️ Other (Custom)' }
                  ]}
                  placeholder="Choose your program"
                  required
                  error={errors.programId}
                  disabled={!formData.departmentId}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  }
                />

                {formData.programId === 'other' && (
                  <ModernInput
                    label="Program Name"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    placeholder="Enter your program name"
                    required
                    error={errors.program}
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    }
                  />
                )}
              </>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-slideIn">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Course Selection
              </h2>
              <p className="text-gray-600">Choose the course for this assignment</p>
            </div>

            <SearchableSelect
              label="Course"
              name="courseId"
              value={formData.courseId}
              onChange={handleSelectChange}
              options={[
                ...courses.map(course => ({
                  value: course.id,
                  label: `${course.code} - ${course.name}`
                })),
                { value: 'other', label: '✏️ Other (Custom Course)' }
              ]}
              placeholder="Search and select your course"
              required
              error={errors.courseId}
              disabled={showProgramSelect ? !formData.programId : !formData.departmentId}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
            />

            {formData.courseId === 'other' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ModernInput
                  label="Course Code"
                  name="courseCode"
                  value={formData.courseCode}
                  onChange={handleChange}
                  placeholder="e.g., CSE 3412"
                  required
                  error={errors.courseCode}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                  }
                />
                <ModernInput
                  label="Course Name"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  placeholder="e.g., System Analysis and Design"
                  required
                  error={errors.courseName}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  }
                />
              </div>
            )}

            {formData.courseId && formData.courseId !== 'other' && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Selected Course</h4>
                    <p className="text-blue-700 font-medium">{formData.courseCode}</p>
                    <p className="text-blue-600 text-sm">{formData.courseName}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-slideIn">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Assignment Details
              </h2>
              <p className="text-gray-600">Enter assignment title and instructor information</p>
            </div>

            <SearchableSelect
              label="Assignment Type"
              name="assignmentTitle"
              value={formData.assignmentTitle}
              onChange={handleSelectChange}
              options={[
                ...ASSIGNMENT_TYPES.map(type => ({ value: type, label: type })),
                { value: 'other', label: '✏️ Custom Title' }
              ]}
              placeholder="Select or enter assignment type"
              required
              error={errors.assignmentTitle}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />

            {formData.assignmentTitle === 'other' && (
              <ModernInput
                label="Assignment Title"
                name="assignmentTitle"
                value={formData.assignmentTitle === 'other' ? '' : formData.assignmentTitle}
                onChange={handleChange}
                placeholder="e.g., Mid-term Project Report"
                required
                error={errors.assignmentTitle}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                }
              />
            )}

            <ModernInput
              label="Submitted To (Instructor)"
              name="submittedTo"
              value={formData.submittedTo}
              onChange={handleChange}
              placeholder="e.g., Dr. Rahman Khan"
              required
              error={errors.submittedTo}
              helperText="Enter your instructor's or professor's name"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 animate-slideIn">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Your Information
              </h2>
              <p className="text-gray-600">Enter your personal details</p>
            </div>

            <ModernInput
              label="Submitted By (Your Name)"
              name="submittedBy"
              value={formData.submittedBy}
              onChange={handleChange}
              placeholder="e.g., Azizur Rahaman"
              required
              error={errors.submittedBy}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ModernInput
                label="Student ID"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="e.g., 1112420167"
                required
                error={errors.studentId}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                }
              />

              <SearchableSelect
                label="Section"
                name="section"
                value={formData.section}
                onChange={handleSelectChange}
                options={[
                  ...SECTIONS.map(sec => ({ value: sec, label: sec })),
                  { value: 'other', label: '✏️ Custom' }
                ]}
                placeholder="Select section"
                required
                error={errors.section}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                }
              />
            </div>

            {formData.section === 'other' && (
              <ModernInput
                label="Section"
                name="section"
                value={formData.section === 'other' ? '' : formData.section}
                onChange={handleChange}
                placeholder="Enter your section"
                required
                error={errors.section}
              />
            )}

            <SearchableSelect
              label="Trimester / Semester"
              name="trimester"
              value={formData.trimester}
              onChange={handleSelectChange}
              options={[
                ...TRIMESTERS.map(tri => ({ value: tri, label: tri })),
                { value: 'other', label: '✏️ Custom' }
              ]}
              placeholder="Select trimester"
              required
              error={errors.trimester}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />

            {formData.trimester === 'other' && (
              <ModernInput
                label="Trimester / Semester"
                name="trimester"
                value={formData.trimester === 'other' ? '' : formData.trimester}
                onChange={handleChange}
                placeholder="e.g., Spring 2025"
                required
                error={errors.trimester}
              />
            )}

            <ModernInput
              label="Submission Date"
              name="submissionDate"
              type="date"
              value={formData.submissionDate}
              onChange={handleChange}
              required
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />

            {/* Preview in final step */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Preview Your Cover Page
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                <CoverPreview data={formData} />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Assignment+
              </h1>
              <p className="text-gray-600 mt-1">Professional Assignment Cover Generator</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>All data saved locally</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step Indicator */}
          <StepIndicator steps={STEPS} currentStep={currentStep} />

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8">
            {renderStep()}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      Next Step
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Generating...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Generate Cover
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </main>
        </div>
      );
    }
