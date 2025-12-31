'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Info, Undo2, Redo2, Maximize2, MoreHorizontal } from 'lucide-react'

export default function StructureCard() {
  return (
    <Card className='shadow-lg p-0 h-[584px] sm:h-[500px] lg:h-[584px] flex flex-col max-sm:h-[400px]'>
      <CardHeader className='bg-black py-1 px-4 rounded-t-xl text-center flex items-center justify-center gap-4 sm:gap-8 max-sm:py-2 max-sm:px-2'>
        <CardTitle className='text-white text-sm sm:text-base lg:text-lg font-semibold'>
          Structure your Pointers
        </CardTitle>
        <Info className='text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6' />
      </CardHeader>
      <CardContent className='p-2 sm:p-3 lg:p-4 flex-1 flex flex-col overflow-y-auto scrollbar-hide'>
        {/* Description Section */}
        <div className='mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-200'>
          <p className='text-xs sm:text-sm text-black'>
            <span className='font-semibold'>Description :</span> Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world
          </p>
        </div>

        {/* Title Input Section */}
        <div className='mb-3 sm:mb-4'>
          <label className='block text-xs sm:text-sm font-bold text-black mb-1 sm:mb-2'>Title</label>
          <input
            type='text'
            placeholder=''
            className='w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Content Editor Section */}
        <div className='flex-1 flex flex-col'>
          <label className='block text-xs sm:text-sm font-bold text-black mb-1 sm:mb-2'>Content</label>
          
          {/* Editor Toolbar */}
          <div className='border border-gray-300 rounded-t-lg bg-white'>
            {/* Menu Bar */}
            <div className='border-b border-gray-200 px-1 sm:px-2 py-1 flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-black overflow-x-auto'>
              <button className='hover:bg-gray-100 px-1 sm:px-2 py-1 rounded whitespace-nowrap'>File</button>
              <button className='hover:bg-gray-100 px-1 sm:px-2 py-1 rounded whitespace-nowrap'>Edit</button>
              <button className='hover:bg-gray-100 px-1 sm:px-2 py-1 rounded whitespace-nowrap'>View</button>
              <button className='hover:bg-gray-100 px-1 sm:px-2 py-1 rounded whitespace-nowrap'>Insert</button>
              <button className='hover:bg-gray-100 px-1 sm:px-2 py-1 rounded whitespace-nowrap'>Format</button>
              <button className='hover:bg-gray-100 px-1 sm:px-2 py-1 rounded whitespace-nowrap'>Tools</button>
              <button className='hover:bg-gray-100 px-1 sm:px-2 py-1 rounded whitespace-nowrap'>Table</button>
              <button className='hover:bg-gray-100 px-1 sm:px-2 py-1 rounded whitespace-nowrap'>Help</button>
            </div>

            {/* Formatting Toolbar */}
            <div className='border-b border-gray-200 px-1 sm:px-2 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-2 overflow-x-auto'>
              <button className='p-1 sm:p-1.5 hover:bg-gray-100 rounded'>
                <Undo2 className='w-3 h-3 sm:w-4 sm:h-4 text-black' />
              </button>
              <button className='p-1 sm:p-1.5 hover:bg-gray-100 rounded'>
                <Redo2 className='w-3 h-3 sm:w-4 sm:h-4 text-black' />
              </button>
              <button className='p-1 sm:p-1.5 hover:bg-gray-100 rounded'>
                <Maximize2 className='w-3 h-3 sm:w-4 sm:h-4 text-black' />
              </button>
              <div className='w-px h-4 sm:h-5 bg-gray-300 mx-0.5 sm:mx-1'></div>
              <select className='px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option>Paragraph</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
              </select>
              <button className='p-1 sm:p-1.5 hover:bg-gray-100 rounded ml-auto'>
                <MoreHorizontal className='w-3 h-3 sm:w-4 sm:h-4 text-black' />
              </button>
            </div>
          </div>

          {/* Content Textarea */}
          <textarea
            placeholder=''
            className='w-full flex-1 px-3 py-2 border border-gray-300 border-t-0 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
            style={{ minHeight: '200px' }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

