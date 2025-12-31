'use client'

import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

export default function Sidebar() {
  // Initialize state based on window size (check if window is available for SSR)
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768
    }
    return false
  })

  //for mobile screen size setIScollapsed to true
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(true)
      } else {
        setIsCollapsed(false)
      }
    }
    
    // Check initial size on mount
    handleResize()
    
    // Listen for resize events
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <aside className={`h-[80vh] flex flex-col rounded-tr-3xl rounded-bl-3xl rounded-br-3xl relative z-10 shadow-gray-600 shadow-lg transition-all duration-300 ${isCollapsed ? 'w-24 md:w-24 max-sm:w-10' : 'w-96 md:w-80'}`}>
      {/* Top Black Section */}
      <div className="bg-black rounded-tr-3xl relative">
        <div className="h-16 flex items-center px-4">
          {!isCollapsed && (
            <h2 className="text-white text-xl font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>Journey Board</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={` max-sm:w-6 max-sm:h-6 ${!isCollapsed ? 'absolute top-3 right-3' : 'ml-auto'} w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors border border-gray-700`}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ArrowLeft 
              className={`text-white w-4 h-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''} max-sm:w-3 max-sm:h-3`} 
            />
          </button> 
        </div>
        
      </div>

      {/* Main White Section */}
      <div className="flex-1 bg-white overflow-y-auto rounded-bl-3xl rounded-br-3xl">
        {isCollapsed ? (
          <div className="p-4 max-sm:p-2">
            {/* Active Navigation Item/Task Card */}
            <div className="w-full max-w-16 h-16 mx-auto rounded-2xl border-2 border-blue-500 flex items-center justify-center mb-4 max-sm:w-6 max-sm:h-6 max-sm:text-xs">
              <span className="text-blue-500 font-medium text-4xl max-sm:text-sm">1</span>
            </div>
          </div>
        ) : (
          <div className="p-4 pl-6">
            {/* Dashed line and main heading */}
            <div className="relative mb-4">
              <div className="absolute -left-6 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-blue-300"></div>
                <h3 className="text-black text-base font-semibold">
                  <span className="text-black font-bold">•</span> Explore the world of management
                </h3>
            </div>

            {/* Bulleted list */}
            <ul className="space-y-2 mb-6 pl-0" style={{ fontFamily: 'var(--font-poppins)' }}>
              <li className="text-black text-sm">• Technical Project Management</li>
              <li className="text-black text-sm">• Threadbuild</li>
              <li className="text-black text-sm">• Structure your pointers</li>
              <li className="text-black text-sm">• 4SA Method</li>
            </ul>
          </div>
        )}
      </div>
    </aside>
  )
}
