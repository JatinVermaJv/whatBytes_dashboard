'use client';
import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 h-20 bg-white px-8 flex items-center justify-between border-b border-gray-200 z-10 text-white">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-white rounded-full" />
        <Image
          src="/Header.png" 
          alt="Logo"
          width={10} 
          height={10}
          className="rounded-full w-10 h-10"
        />
        <h2 className="text-2xl font-bold text-black">WhatBytes</h2>
      </div>

      <button className="flex items-center space-x-4 bg-gray-100 hover:bg-gray-300 px-2 py-2 rounded-lg">
        {/* Profile image along with the name */}
        <Image
          src="/Profile.png" 
          alt="Profile"
          width={20} 
          height={20}
          className="rounded-full w-6 h-6"
        />
        {/* Username along with the profile photo */}
        <span className="font-bold text-md text-black">originator V1</span>
      </button>
    </header>
  );
};
