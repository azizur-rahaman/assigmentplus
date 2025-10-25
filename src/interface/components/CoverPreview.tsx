// Component: Cover Preview (placeholder for future enhancement)

'use client';

import React from 'react';
import { CoverData } from '@/types/cover';

interface CoverPreviewProps {
  data: CoverData;
}

export default function CoverPreview({ data }: CoverPreviewProps) {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg">
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">🎓</div>
        <h2 className="text-xl font-bold text-blue-900">{data.universityName || 'United International University'}</h2>
        <p className="text-sm text-gray-600">{data.school || 'School of Science and Engineering'}</p>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-blue-800">
          {data.courseName} {data.courseCode && `(${data.courseCode})`}
        </h3>
        {data.assignmentTitle && (
          <p className="text-orange-600 font-semibold mt-2">{data.assignmentTitle}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div>
          <h4 className="font-bold text-blue-900 mb-2">SUBMITTED TO:</h4>
          <p className="text-sm text-gray-700">{data.submittedTo || '-'}</p>
          <p className="text-sm text-gray-600">{data.school || '-'}</p>
          <p className="text-sm text-gray-600">{data.universityName || 'United International University'}</p>
        </div>

        <div>
          <h4 className="font-bold text-blue-900 mb-2">SUBMITTED BY:</h4>
          <p className="text-sm text-gray-700">{data.submittedBy || '-'}</p>
          <p className="text-sm text-gray-600">Id: {data.studentId || '-'}</p>
          <p className="text-sm text-gray-600">Section: {data.section || '-'}</p>
          <p className="text-sm text-gray-600">Trimester: {data.trimester || '-'}</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="font-bold text-orange-600">
          SUBMISSION DATE: {data.submissionDate || '-'}
        </p>
      </div>
    </div>
  );
}
