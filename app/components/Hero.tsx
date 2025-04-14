'use client';

import DateDisplay from './DateDisplay';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-[#f2f2f2] px-10 py-12 relative">
      {/* Main content */}
      <div className="max-w-[1400px] mx-auto">
        {/* Name heading */}
        <h1 className="text-[#111] text-[180px] font-bold tracking-tighter leading-none mb-16">
          HUY NGUYEN<span className="inline-block">©</span>
        </h1>

        <div className="flex justify-between items-end gap-4">
          {/* Left column - Text */}
          <div className="flex-shrink-0">
            {/* Arrow icon */}
            <div className="mb-6">
              <span className="text-3xl transform -rotate-45">↓</span>
            </div>
            
            <p className="text-[#444] text-2xl leading-relaxed mb-12" style={{ width: '532.1px' }}>
              I help growing brands and startups gain an unfair advantage through premium, results driven websites.
            </p>

            <button className="bg-[#333] text-white px-8 py-4 rounded-full hover:bg-black transition-colors inline-flex items-center gap-2">
              BOOK A CALL
              <span className="inline-block rotate-45">↑</span>
            </button>
          </div>

          {/* Middle column - Image */}
          <div className="flex-shrink-0">
            <div className="relative w-[431.92px] h-[540.02px] rounded-3xl overflow-hidden">
              <Image
                src="/Me.png"
                alt="Profile picture"
                width={432}
                height={540}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Right column - Date */}
          <div className="flex-shrink-0">
            <div className="text-right">
              <div className="text-[#666] mb-1 font-mono">AVAILABLE FOR FREELANCE WORK</div>
              <div className="text-[#111] text-[48px] font-mono font-bold tracking-tight">
                APR '25
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 