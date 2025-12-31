'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Info, ChevronUp, ChevronDown } from 'lucide-react'

export default function FourSAMethodCard() {
  const [isIntroductionExpanded, setIsIntroductionExpanded] = useState(true)
  const [isThreadAExpanded, setIsThreadAExpanded] = useState(true)

  return (
    <Card className='shadow-lg p-0 h-[584px] sm:h-[500px] lg:h-[584px] flex flex-col max-sm:h-[400px]'>
      <CardHeader className='bg-black py-1 px-4 rounded-t-xl text-center flex items-center justify-center gap-4 sm:gap-8 max-sm:py-2 max-sm:px-2'>
        <CardTitle className='text-white text-sm sm:text-base lg:text-lg font-semibold'>
          4SA Method
        </CardTitle>
        <Info className='text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6' />
      </CardHeader>
      <CardContent className='p-2 sm:p-3 lg:p-4 flex-1 flex flex-col overflow-y-auto scrollbar-hide'>
        {/* Description Section */}
        <div className='mb-4 pb-4 border-b border-gray-200'>
          <p className='text-sm text-black'>
            <span className='font-semibold'>Description :</span> To Explore more read more
          </p>
        </div>

        {/* Introduction Section */}
        <div className='mb-3 sm:mb-4'>
          <button
            onClick={() => setIsIntroductionExpanded(!isIntroductionExpanded)}
            className='bg-gray-100 hover:bg-gray-200 transition-colors px-3 sm:px-4 py-2 sm:py-2.5 rounded-t-lg flex items-center justify-between mb-0 w-full'
          >
            <span className='font-bold text-black text-xs sm:text-sm'>Introduction</span>
            {isIntroductionExpanded ? (
              <ChevronUp className='w-4 h-4 text-black' />
            ) : (
              <ChevronDown className='w-4 h-4 text-black' />
            )}
          </button>
          {isIntroductionExpanded && (
            <div className='bg-white border border-gray-200 rounded-b-lg p-3 sm:p-4'>
              <p className='text-xs sm:text-sm text-black mb-2'>
                The 4SA Method , How to bring a idea into progress ?
              </p>
              <a href='#' className='text-blue-600 text-xs sm:text-sm hover:underline'>
                See More
              </a>
            </div>
          )}
        </div>

        {/* Thread A Section */}
        <div className='mb-3 sm:mb-4'>
          <button
            onClick={() => setIsThreadAExpanded(!isThreadAExpanded)}
            className='bg-gray-100 hover:bg-gray-200 transition-colors px-3 sm:px-4 py-2 sm:py-2.5 rounded-t-lg flex items-center justify-between mb-0 w-full'
          >
            <span className='font-bold text-black text-xs sm:text-sm'>Thread A</span>
            {isThreadAExpanded ? (
              <ChevronUp className='w-4 h-4 text-black' />
            ) : (
              <ChevronDown className='w-4 h-4 text-black' />
            )}
          </button>
          {isThreadAExpanded && (
            <div className='bg-white border border-gray-200 rounded-b-lg p-3 sm:p-4'>
              <p className='text-xs sm:text-sm text-black mb-2'>
                How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?
              </p>
              <a href='#' className='text-blue-600 text-xs sm:text-sm hover:underline'>
                See More
              </a>
            </div>
          )}
        </div>

        {/* Example 1 Section */}
        <div className='bg-gray-100 rounded-lg p-3 sm:p-4'>
          <h3 className='font-bold text-black text-xs sm:text-sm mb-1 sm:mb-2'>Example 1</h3>
          <p className='text-xs sm:text-sm text-black'>
            You have a concept , How will you put into progress?
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

