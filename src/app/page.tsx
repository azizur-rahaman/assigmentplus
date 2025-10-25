'use client';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import InputField from '@/interface/components/InputField';
import SelectField from '@/interface/components/SelectField';
import GenerateButton from '@/interface/components/GenerateButton';
import CoverPreview from '@/interface/components/CoverPreview';
import { CoverData } from '@/types/cover';
import { getCurrentDate } from '@/utils/dateFormatter';
import { validateCoverData } from '@/utils/validators';
import { LocalStorageAdapter } from '@/infrastructure/storage/localStorage.adapter';
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
} from '@/infrastructure/data/universities.data';
import { SECTIONS, TRIMESTERS, ASSIGNMENT_TYPES } from '@/infrastructure/data/options.data';
import { baseUrl } from '@/utils/baseUrl';

const storage = new LocalStorageAdapter();

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
  const [showPreview, setShowPreview] = useState(false);

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
    
    // Reset dependent fields when parent selection changes
    if (name === 'universityId') {
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
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        courseId: '',
        courseName: '',
        courseCode: '',
      }));
    } else if (name === 'courseId') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
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
        `${baseUrl}/api/generate`, {
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
          <h1 className="text-4xl font-bold text-blue-900 mb-2">aissngment+</h1>
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
              options={universities.map(uni => ({
                value: uni.id,
                label: uni.name
              }))}
              placeholder="Choose your university"
              required
              error={errors.universityId}
            />

            {/* School Selection */}
            <SelectField
              label="Select School/Faculty"
              name="schoolId"
              value={formData.schoolId}
              onChange={handleSelectChange}
              options={schools.map(school => ({
                value: school.id,
                label: school.name
              }))}
              placeholder="Choose your school"
              required
              error={errors.schoolId}
              disabled={!formData.universityId}
            />

            {/* Department Selection */}
            <SelectField
              label="Select Department/Program"
              name="departmentId"
              value={formData.departmentId}
              onChange={handleSelectChange}
              options={departments.map(dept => ({
                value: dept.id,
                label: dept.name
              }))}
              placeholder="Choose your department"
              required
              error={errors.departmentId}
              disabled={!formData.schoolId}
            />

            {/* Program Selection - Only shown if department has programs */}
            {showProgramSelect && (
              <SelectField
                label="Select Program"
                name="programId"
                value={formData.programId || ''}
                onChange={handleSelectChange}
                options={programs.map(prog => ({
                  value: prog.id,
                  label: prog.name
                }))}
                placeholder="Choose your program"
                required
                error={errors.programId}
                disabled={!formData.departmentId}
              />
            )}

            {/* Course Selection */}
            <SelectField
              label="Select Course"
              name="courseId"
              value={formData.courseId}
              onChange={handleSelectChange}
              options={courses.map(course => ({
                value: course.id,
                label: `${course.code} - ${course.name}`
              }))}
              placeholder="Choose your course"
              required
              error={errors.courseId}
              disabled={showProgramSelect ? !formData.programId : !formData.departmentId}
            />

            {/* Assignment Title */}
            <SelectField
              label="Assignment Title"
              name="assignmentTitle"
              value={formData.assignmentTitle}
              onChange={handleSelectChange}
              options={ASSIGNMENT_TYPES.map(type => ({
                value: type,
                label: type
              }))}
              placeholder="Select assignment type"
              required
              error={errors.assignmentTitle}
            />

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
              placeholder="e.g., Kaspia Tasmim Trisha"
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
                options={SECTIONS.map(sec => ({
                  value: sec,
                  label: `Section ${sec}`
                }))}
                placeholder="Select section"
                required
                error={errors.section}
              />
            </div>

            <SelectField
              label="Trimester"
              name="trimester"
              value={formData.trimester}
              onChange={handleSelectChange}
              options={TRIMESTERS.map(tri => ({
                value: tri,
                label: tri
              }))}
              placeholder="Select trimester"
              required
              error={errors.trimester}
            />

            <InputField
              label="Submission Date"
              name="submissionDate"
              value={formData.submissionDate}
              onChange={handleChange}
              placeholder="DD.MM.YYYY"
              required
              error={errors.submissionDate}
            />

            <div className="mt-6 space-y-3">
              <GenerateButton onClick={handleGenerate} loading={loading} />
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="w-full bg-gray-200 text-gray-700 py-2 px-6 rounded-md font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors"
              >
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {showPreview ? 'Live Preview' : 'Ready to Generate'}
            </h2>
            {showPreview ? (
              <CoverPreview data={formData} />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <div className="text-center">
                  <div className="text-6xl mb-4">📄</div>
                  <p>Fill in the details and click "Show Preview"</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <footer className="text-center mt-8 text-gray-600 text-sm">
<p>© 2025 CG4Academy. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
