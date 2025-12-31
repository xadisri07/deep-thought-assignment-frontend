'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Info, ChevronUp, Lightbulb, MessageCircle, HelpCircle, Sprout, Plus, ChevronDown } from 'lucide-react'

export default function ThreadbuildCard() {
  const [isThreadExpanded, setIsThreadExpanded] = useState(true)

  return (
    <Card className='shadow-lg p-0 h-[584px] sm:h-[500px] lg:h-[584px] flex flex-col max-sm:h-[400px]'>
      <CardHeader className='bg-black py-1 px-4 rounded-t-xl text-center flex items-center justify-center gap-4 sm:gap-8 max-sm:py-2 max-sm:px-2'>
        <CardTitle className='text-white text-sm sm:text-base lg:text-lg font-semibold'>
          Threadbuild
        </CardTitle>
        <Info className='text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6' />
      </CardHeader>
      <CardContent className='p-2 sm:p-3 lg:p-4 flex-1 flex flex-col overflow-y-auto scrollbar-hide'>
        {/* Description Section */}
        <div className='mb-4'>
          <p className='text-sm text-black'>
            <span className='font-semibold'>Description:</span> Watch the video and threadbuild, and jot out key threads while watching the video
          </p>
        </div>

        {/* Thread A Section */}
        <div className='flex-1 flex flex-col'>
          {/* Thread A Header */}
          <button
            onClick={() => setIsThreadExpanded(!isThreadExpanded)}
            className='bg-[#F5E6D3] hover:bg-[#E8D9C6] transition-colors px-4 py-2.5 rounded-t-lg flex items-center gap-2 mb-0 w-full'
          >
            {isThreadExpanded ? (
              <ChevronUp className='w-4 h-4 text-black' />
            ) : (
              <ChevronDown className='w-4 h-4 text-black' />
            )}
            <span className='font-bold text-black text-sm'>Thread A</span>
          </button>

          {isThreadExpanded && (
            <div className='bg-white border border-gray-200 rounded-b-lg p-4 flex-1 flex flex-col'>
              {/* Two Input Fields */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4'>
                <div>
                  <label className='block text-sm font-medium text-black mb-1'>Sub thread 1</label>
                  <input
                    type='text'
                    placeholder='Enter Text here'
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-black mb-1'>Sub Interpretation 1</label>
                  <input
                    type='text'
                    placeholder='Enter Text here'
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
              </div>

              {/* Icons and Dropdowns Row */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4'>
                <div className='flex items-center gap-2 sm:gap-3'>
                  <Lightbulb className='w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer hover:text-blue-600 transition-colors' />
                  <MessageCircle className='w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer hover:text-blue-600 transition-colors' />
                  <HelpCircle className='w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer hover:text-blue-600 transition-colors' />
                  <Sprout className='w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer hover:text-blue-600 transition-colors' />
                </div>
                <div className='flex items-center gap-2 w-full sm:w-auto'>
                  <select className='px-2 py-1.5 sm:px-3 sm:py-2 bg-gray-200 border border-gray-300 rounded-lg text-xs sm:text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer flex-1 sm:flex-none'>
                    <option>Select Categ</option>
                  </select>
                  <select className='px-2 py-1.5 sm:px-3 sm:py-2 bg-gray-200 border border-gray-300 rounded-lg text-xs sm:text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer flex-1 sm:flex-none'>
                    <option>Select Proces</option>
                  </select>
                </div>
              </div>

              {/* Add Sub-thread Button */}
              <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 mb-4 w-fit transition-colors'>
                <Plus className='w-5 h-5' />
                <span>Sub-thread</span>
              </button>

              {/* Summary Text Area */}
              <div className='flex-1 flex flex-col'>
                <label className='block text-sm font-medium text-black mb-1'>Summary for Thread A</label>
                <textarea
                  placeholder='Enter Text Here'
                  className='w-full flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

