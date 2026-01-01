"use client";

import React, { useState } from "react";
import { X, ChevronLeft } from "lucide-react";

export default function NoticeBoard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed right-0 top-20 z-40 flex transition-transform duration-300 ease-in-out "
    >
      {isOpen ? (
        <div className="w-[400px] h-80 bg-white rounded-tl-3xl rounded-bl-3xl shadow-lg flex flex-col border-l border-gray-200">
          {/* Header */}
          <div className="bg-black rounded-tl-3xl px-4 py-3 flex items-center justify-between">
            <h2 className="text-white text-lg font-semibold">Notice</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close Notice Board"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Notice Content - Black and White */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3">
              {/* Notice Items - Black text on white background */}
              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-white rounded-r">
                <h3 className="font-semibold text-sm text-black">
                  Welcome to Deep Thought
                </h3>
                <p className="text-xs text-black mt-1">
                  Get started with your project management journey.
                </p>
                <span className="text-xs text-gray-500 mt-2 block">
                  2 hours ago
                </span>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2 bg-white rounded-r">
                <h3 className="font-semibold text-sm text-black">
                  New Feature Available
                </h3>
                <p className="text-xs text-black mt-1">
                  Threadbuild feature is now live for all users.
                </p>
                <span className="text-xs text-gray-500 mt-2 block">
                  1 day ago
                </span>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-white rounded-r">
                <h3 className="font-semibold text-sm text-black">
                  Maintenance Notice
                </h3>
                <p className="text-xs text-black mt-1">
                  Scheduled maintenance on Sunday 10 PM - 12 AM.
                </p>
                <span className="text-xs text-gray-500 mt-2 block">
                  3 days ago
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="w-10 h-80 bg-black rounded-tl-3xl rounded-bl-3xl shadow-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-900 transition-colors py-4"
          
        >
          <ChevronLeft className="w-6 h-6 text-white mb-4" 
          onClick={() => setIsOpen(true)}
          />
          {/* Vertical Text "Notice Board" */}
          <div className="flex flex-col items-center gap-1 flex-1 justify-center">
            <div className="flex flex-col gap-1 items-center">
              <span className="text-white text-sm font-medium leading-none">
                N
              </span>
              <span className="text-white text-sm font-medium leading-none">
                o
              </span>
              <span className="text-white text-sm font-medium leading-none">
                t
              </span>
              <span className="text-white text-sm font-medium leading-none">
                i
              </span>
              <span className="text-white text-sm font-medium leading-none">
                c
              </span>
              <span className="text-white text-sm font-medium leading-none">
                e
              </span>
            </div>
            <div className="flex flex-col gap-1 items-center mt-2">
              <span className="text-white text-sm font-medium leading-none">
                B
              </span>
              <span className="text-white text-sm font-medium leading-none">
                o
              </span>
              <span className="text-white text-sm font-medium leading-none">
                a
              </span>
              <span className="text-white text-sm font-medium leading-none">
                r
              </span>
              <span className="text-white text-sm font-medium leading-none">
                d
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
