// Presentation Component: Cover Preview

'use client';

import React from 'react';

interface CoverPreviewProps {
  data: {
    universityName: string;
    school: string;
    department: string;
    program?: string;
    courseName: string;
    courseCode: string;
    assignmentTitle: string;
    submittedTo: string;
    submittedBy: string;
    studentId: string;
    section: string;
    trimester: string;
    submissionDate: string;
  };
}

export function CoverPreview({ data }: CoverPreviewProps) {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg min-h-[600px] transition-all duration-200">
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">🎓</div>
        <h2 className="text-xl font-bold text-blue-900 transition-all duration-200">
          {data.universityName || 'Select University...'}
        </h2>
        <p className="text-sm text-gray-600 transition-all duration-200">
          {data.school || 'Select School/Faculty...'}
        </p>
      </div>

      <div className="text-center mb-6">
        <p className="text-sm text-gray-600 mb-2 transition-all duration-200">
          {data.program || data.department || 'Select Department/Program...'}
        </p>
        <h3 className="text-lg font-bold text-blue-800 transition-all duration-200">
          {data.courseName || 'Course Name'} {data.courseCode && `(${data.courseCode})`}
        </h3>
        <p className="text-orange-600 font-semibold mt-2 text-lg transition-all duration-200">
          {data.assignmentTitle || 'Assignment Title'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="transition-all duration-200">
          <h4 className="font-bold text-blue-900 mb-2">SUBMITTED TO:</h4>
          <p className="text-sm text-gray-700 transition-all duration-200">
            {data.submittedTo || 'Instructor Name...'}
          </p>
          <p className="text-sm text-gray-600 transition-all duration-200">
            {data.school || 'School/Faculty...'}
          </p>
          <p className="text-sm text-gray-600 transition-all duration-200">
            {data.universityName || 'University Name...'}
          </p>
        </div>

        <div className="transition-all duration-200">
          <h4 className="font-bold text-blue-900 mb-2">SUBMITTED BY:</h4>
          <p className="text-sm text-gray-700 transition-all duration-200">
            {data.submittedBy || 'Your Name...'}
          </p>
          <p className="text-sm text-gray-600 transition-all duration-200">
            Id: {data.studentId || 'Student ID...'}
          </p>
          <p className="text-sm text-gray-600 transition-all duration-200">
            Section: {data.section || 'Section...'}
          </p>
          <p className="text-sm text-gray-600 transition-all duration-200">
            Trimester: {data.trimester || 'Trimester...'}
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="font-bold text-orange-600 transition-all duration-200">
          SUBMISSION DATE: {data.submissionDate || 'DD.MM.YYYY'}
        </p>
      </div>
    </div>
  );
}
