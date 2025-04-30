'use client'
import React from 'react';
import { useScore } from './ScoreContext';

interface StatCardProps {
  icon: string;
  value: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
    <div className={`text-2xl ${icon === '🏆' ? 'text-yellow-500' : icon === '📊' ? 'text-blue-500' : 'text-green-500'}`}>
      {icon}
    </div>
    <div>
      <div className="text-xl text-black font-semibold">{value}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
  </div>
);

const QuickStats = () => {
  const { rank, percentile, currentScore } = useScore();

  const stats = [
    {
      icon: '🏆',
      value: rank,
      description: 'YOUR RANK'
    },
    {
      icon: '📊',
      value: `${percentile}%`,
      description: 'PERCENTILE'
    },
    {
      icon: '✅',
      value: `${currentScore}/15`,
      description: 'CORRECT ANSWERS'
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-sm font-semibold text-gray-800 p-2">Quick Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default QuickStats; 