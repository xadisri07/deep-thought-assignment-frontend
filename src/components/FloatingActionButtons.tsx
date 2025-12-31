'use client'

import React from 'react'
import { HelpCircle } from 'lucide-react'

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Question Mark Icon */}
      <button 
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        aria-label="Help"
      >
        <HelpCircle className="text-white w-7 h-7" strokeWidth={2.5} fill="white" />
      </button>

      {/* Meeting/People Around Table Icon */}
      <button 
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        aria-label="Meetings"
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          {/* Table */}
          <rect x="8" y="12" width="8" height="2" fill="white" rx="1" />
          {/* Central person */}
          <circle cx="12" cy="10" r="2.5" fill="white" />
          <rect x="10.5" y="12" width="3" height="3" fill="white" rx="0.5" />
          {/* Left person */}
          <circle cx="6" cy="10" r="2" fill="white" />
          <rect x="4.5" y="12" width="3" height="3" fill="white" rx="0.5" />
          {/* Right person */}
          <circle cx="18" cy="10" r="2" fill="white" />
          <rect x="16.5" y="12" width="3" height="3" fill="white" rx="0.5" />
        </svg>
      </button>

      {/* Calendar with Clock Icon */}
      <button 
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl relative"
        aria-label="Schedule"
      >
        {/* Calendar */}
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          {/* Calendar grid */}
          <rect x="4" y="5" width="16" height="16" rx="2" stroke="white" strokeWidth="2" fill="none" />
          <line x1="4" y1="10" x2="20" y2="10" stroke="white" strokeWidth="2" />
          {/* Calendar cells */}
          <line x1="9" y1="10" x2="9" y2="21" stroke="white" strokeWidth="1.5" />
          <line x1="15" y1="10" x2="15" y2="21" stroke="white" strokeWidth="1.5" />
          <line x1="4" y1="15" x2="20" y2="15" stroke="white" strokeWidth="1.5" />
          {/* Clock overlay in bottom right */}
          <circle cx="17" cy="17" r="3.5" stroke="white" strokeWidth="1.5" fill="white" />
          <circle cx="17" cy="17" r="2.5" fill="blue" />
          {/* Clock hands */}
          <line x1="17" y1="17" x2="17" y2="15.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
          <line x1="17" y1="17" x2="18.5" y2="17" stroke="white" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}

