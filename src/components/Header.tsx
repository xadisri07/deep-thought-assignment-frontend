import { Bell, Home, Settings } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white border-t border-b border-gray-300 shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 mx-0 sm:mx-8 lg:mx-16">
        {/* Left side - Logo and Brand */}
        <div className="flex items-center gap-3">
          {/* Logo Icon - Circular blue with white network design */}
          <Image src="/logo_main.png" alt="logo" width={311} height={50} className="hidden sm:block" />
          <Image src="/logo_main_short.png" alt="logo" width={40} height={40} className="max-sm:block sm:hidden" />
        </div>

        {/* Right side - Icons and Profile */}
        <div className="flex items-center gap-4">
          {/* Home Icon */}
          <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
           <Home className='text-white w-4 h-4' />
          </button>

          {/* Settings/Wrench Icon */}
          <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
           <Settings className='text-white w-4 h-4' />
          </button>

          {/* Notifications Icon with Red Dot */}
          <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors relative">
           <Bell className='text-white w-4 h-4' />
            {/* Red notification dot */}
            <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
          </button>

          {/* Profile Picture */}
          <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 bg-gray-200 flex items-center justify-center">
            <Image src="/avatar.png" alt="profile" width={42} height={42} />
          </div>

          {/* Kebab Menu - Three Vertical Dots */}
          <button className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-600"
            >
              <circle cx="12" cy="6" r="2" fill="currentColor" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <circle cx="12" cy="18" r="2" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
