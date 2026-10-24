import React from 'react';

export default function ShriMetroLogo({ className = "h-12", variant = "dark" }) {
  const isLight = variant === "light"; // For dark backgrounds

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblem */}
      <svg className="h-full aspect-square flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#0F172A" stroke="#D9232D" strokeWidth="3" />
        <circle cx="50" cy="50" r="41" fill="none" stroke="#D9232D" strokeWidth="0.75" strokeDasharray="3 2" opacity="0.5" />
        
        {/* Chair Back Frame */}
        <path d="M 33 26 Q 50 22 67 26 L 64 54 L 36 54 Z" fill="#DC2626" />
        
        {/* Slats */}
        <rect x="41" y="29" width="3" height="21" rx="1" fill="#0F172A" />
        <rect x="48" y="28" width="4" height="23" rx="1" fill="#0F172A" />
        <rect x="56" y="29" width="3" height="21" rx="1" fill="#0F172A" />
        
        {/* Seat Cushion */}
        <rect x="31" y="52" width="38" height="5" rx="1.5" fill="#EF4444" />
        
        {/* Arms and Legs in White */}
        <path d="M 30 38 Q 30 49 33 53 L 34 76 L 30 76 L 27 52 Q 26 44 28 38 Z" fill="#FFFFFF" />
        <path d="M 70 38 Q 70 49 67 53 L 66 76 L 70 76 L 73 52 Q 74 44 72 38 Z" fill="#FFFFFF" />
        <rect x="33" y="67" width="34" height="2" rx="0.5" fill="#E2E8F0" />
      </svg>

      {/* Brand Wordmark */}
      <div className="flex flex-col justify-center">
        <span className={`font-extrabold tracking-wider leading-none text-lg md:text-xl font-heading ${isLight ? 'text-white' : 'text-slate-900'}`}>
          SHRI <span className="text-brand-red">METRO</span>
        </span>
        <span className={`text-[9px] uppercase tracking-widest font-semibold mt-0.5 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
          Plastic Moulded Furniture
        </span>
      </div>
    </div>
  );
}
