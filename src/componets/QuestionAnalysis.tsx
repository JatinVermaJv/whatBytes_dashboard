'use client';

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Target } from 'lucide-react';
import 'react-circular-progressbar/dist/styles.css';
import { useScore } from './ScoreContext';

export const QuestionAnalysis = ({ className = '' }: { className?: string }) => {
  const { currentScore } = useScore();
  const score = parseInt(currentScore);
  const total = 15;
  const percentage = (score / total) * 100;

  return (
    <div
      className={`
        w-[386px] h-[300px] rounded-xl border border-[#EAECF0] bg-white 
        p-6 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] flex flex-col justify-between
        ${className}
      `}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-semibold text-gray-800">Question Analysis</span>
        <span className="text-sm font-semibold text-blue-600">{`${score}/${total}`}</span>
      </div>
      <p className="text-sm text-gray-600">
        You scored <strong>{score} question correct</strong> out of {total}. However it still needs some improvements.
      </p>

      <div className="flex justify-center items-center mt-4 relative w-36 h-36 mx-auto">
        <CircularProgressbar
          value={percentage}
          strokeWidth={12}
          styles={buildStyles({
            pathColor: '#3B82F6',
            trailColor: '#E5E7EB',
          })}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Target className="text-red-500 w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
