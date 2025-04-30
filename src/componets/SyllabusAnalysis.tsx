'use client';

import React from 'react';

const syllabusData = [
  {
    label: 'HTML Tools, Forms, History',
    value: 80,
    color: 'bg-blue-500',
    bgColor: 'bg-blue-100',
  },
  {
    label: 'Tags & References in HTML',
    value: 60,
    color: 'bg-orange-500',
    bgColor: 'bg-orange-100',
  },
  {
    label: 'Tables & References in HTML',
    value: 24,
    color: 'bg-red-500',
    bgColor: 'bg-red-100',
  },
  {
    label: 'Tables & CSS Basics',
    value: 96,
    color: 'bg-green-500',
    bgColor: 'bg-green-100',
  },
];

export const SyllabusAnalysis = () => {
  return (
    <div className="bg-white rounded-md p-6 shadow-sm border border-gray-200 w-full max-w-md">
      <h3 className="text-md font-semibold text-black mb-4">Syllabus Wise Analysis</h3>
      <div className="space-y-4">
        {syllabusData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1 p-4">
              <span className="text-sm text-gray-700">{item.label}</span>
              <span className="text-sm font-semibold text-gray-700">{item.value}%</span>
            </div>
            <div className={`w-full h-2 rounded-full ${item.bgColor}`}>
              <div
                className={`${item.color} h-full rounded-full`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

