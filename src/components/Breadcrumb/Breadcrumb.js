"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb({ homeLabel = 'Home', customItems }) {
  const pathname = usePathname();

  const items = customItems || React.useMemo(() => {
    if (!pathname) return [];
    
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      const label = segment
        .replace(/-+/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
        
      return { label, href };
    });
  }, [pathname]);

  return (
    /* Applied the custom background color, padding, and layout wrappers here */
    <nav 
      aria-label="Breadcrumb" 
      className="inline-flex items-center gap-2 bg-[#ddd5f2] px-4 py-2 rounded-full text-sm md:text-base font-semibold select-none shadow-sm"
    >
      {/* Home Link */}
      <Link 
        href="/" 
        className="flex items-center gap-1.5 text-neutral-600 hover:text-neutral-950 transition-colors duration-200"
      >
        <svg 
          className="w-4 h-4 transform -translate-y-[1px]" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span>{homeLabel}</span>
      </Link>

      {/* Dynamic Segments */}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={item.href}>
            {/* Divider sign ">" */}
            <span className="text-neutral-500 font-bold text-xs px-0.5">&gt;</span>
            
            {isLast ? (
              // Current active page
              <span className="text-neutral-950" aria-current="page">
                {item.label}
              </span>
            ) : (
              // Middle parent pages
              <Link 
                href={item.href}
                className="text-neutral-600 hover:text-neutral-950 transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}