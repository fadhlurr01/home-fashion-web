import React from 'react';

export default function SvgSymbols() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="logoMark" viewBox="0 0 64 64">
          <rect x="2" y="2" width="60" height="60" rx="15" fill="currentColor"/>
          <path d="M14 49 C28 34 42 19 52 12" stroke="#B86445" strokeWidth="2.6" strokeLinecap="round" fill="none" opacity=".95"/>
          <circle cx="14" cy="50" r="2.3" fill="#B86445"/>
          <path d="M27 17v32M27 17h14M27 30h11" stroke="#F5F0E8" strokeWidth="5.6" strokeLinecap="round" fill="none"/>
        </symbol>
      </defs>
    </svg>
  );
}
