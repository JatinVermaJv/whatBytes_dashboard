'use client';

import React from 'react';
import { Home, ClipboardCheck, UploadCloud } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: <Home size={18} /> },
  { name: 'Skill Test', icon: <ClipboardCheck size={18} />, active: true },//keeping this as active becuase it was in the video
  { name: 'Internship', icon: <UploadCloud size={18} /> },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-20 h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <nav className="flex-1 px-4 pt-6 space-y-2">
        {navItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer text-sm font-medium transition-all
              ${
                item.active
                  ? 'bg-[#EEF4FF] text-[#3B82F6]'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};


