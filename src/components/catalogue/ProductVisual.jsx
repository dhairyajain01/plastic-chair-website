import React, { useState } from 'react';

export default function ProductVisual({ product, activeColor, className = "h-56" }) {
  const [imageError, setImageError] = useState(false);
  const colorHex = activeColor?.hex || product.colors?.[0]?.hex || '#451A03';

  // If a photo exists in public/images/products/, try loading it; fallback gracefully to stylized vector
  const imageSrc = `/images/products/${product.id}.png`;

  if (!imageError && product.hasRealPhoto) {
    return (
      <div className={`relative flex items-center justify-center p-4 overflow-hidden ${className}`}>
        <img
          src={imageSrc}
          alt={product.name}
          className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-105"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Render stylized, high-fidelity visual based on category & style
  return (
    <div className={`relative flex items-center justify-center p-4 select-none ${className}`}>
      {/* Soft radial shadow under product */}
      <div 
        className="absolute bottom-3 w-3/4 h-4 rounded-full filter blur-md opacity-25"
        style={{ backgroundColor: '#0f172a' }}
      />

      <svg 
        viewBox="0 0 200 200" 
        className="h-full w-full object-contain filter drop-shadow-lg transition-all duration-300 transform group-hover:scale-105"
      >
        <defs>
          <linearGradient id={`grad-${product.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorHex} stopOpacity="1" />
            <stop offset="100%" stopColor={colorHex} stopOpacity="0.82" />
          </linearGradient>
          <linearGradient id={`highlight-${product.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Dynamic Category Renders */}
        {renderCategoryGraphic(product, colorHex)}
      </svg>
    </div>
  );
}

function renderCategoryGraphic(product, color) {
  const { category, id } = product;

  // 1. BANQUET CHAIRS (Bahubali, Hanuman, Prabhu, Shivji)
  if (category === "banquet-chairs") {
    return (
      <g>
        {/* Rear Legs */}
        <line x1="72" y1="95" x2="68" y2="175" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
        <line x1="128" y1="95" x2="132" y2="175" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
        
        {/* Royal Crown / Backrest */}
        {id === "prabhu" ? (
          <ellipse cx="100" cy="55" rx="30" ry="38" fill={color} stroke="#334155" strokeWidth="2" />
        ) : (
          <path d="M 68 28 Q 100 18 132 28 L 130 96 L 70 96 Z" fill={color} rx="4" />
        )}
        
        {/* Back Mesh / Slats */}
        <line x1="84" y1="35" x2="84" y2="92" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4" />
        <line x1="100" y1="30" x2="100" y2="92" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.5" />
        <line x1="116" y1="35" x2="116" y2="92" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4" />
        <line x1="74" y1="60" x2="126" y2="60" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.3" />

        {/* Chair Seat */}
        <path d="M 60 95 L 140 95 L 134 110 L 66 110 Z" fill={color} stroke="#0f172a" strokeWidth="1" />
        <rect x="62" y="94" width="76" height="5" rx="2" fill="#ffffff" fillOpacity="0.25" />

        {/* Front Legs */}
        <line x1="72" y1="108" x2="68" y2="180" stroke={color} strokeWidth="6" strokeLinecap="round" />
        <line x1="128" y1="108" x2="132" y2="180" stroke={color} strokeWidth="6" strokeLinecap="round" />

        {/* Signature Ring Stretcher */}
        <circle cx="86" cy="155" r="7" fill="none" stroke={color} strokeWidth="2.5" />
        <circle cx="100" cy="155" r="7" fill="none" stroke={color} strokeWidth="2.5" />
        <circle cx="114" cy="155" r="7" fill="none" stroke={color} strokeWidth="2.5" />
        <line x1="70" y1="155" x2="130" y2="155" stroke={color} strokeWidth="2" />
      </g>
    );
  }

  // 2. CAFETERIA CHAIRS (Crystal, Spykar, Web)
  if (category === "cafeteria-chairs") {
    if (id === "crystal" || id === "web") {
      return (
        <g>
          {/* Splayed modern legs */}
          <line x1="76" y1="120" x2="60" y2="180" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="124" y1="120" x2="140" y2="180" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="85" y1="115" x2="80" y2="175" stroke="#64748b" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="115" y1="115" x2="120" y2="175" stroke="#64748b" strokeWidth="3.5" strokeLinecap="round" />

          {/* Organic / Geometric Web Tub Shell */}
          <path 
            d="M 52 75 Q 48 35 100 35 Q 152 35 148 75 Q 146 122 100 122 Q 54 122 52 75 Z" 
            fill={color} 
            stroke="#0f172a" 
            strokeWidth="1.5"
          />

          {/* Intricate Branch/Web Cutouts (Flagship look) */}
          <path 
            d="M 70 55 Q 85 45 92 65 Q 80 80 70 55 Z M 130 55 Q 115 45 108 65 Q 120 80 130 55 Z M 100 48 Q 110 75 100 95 Q 90 75 100 48 Z M 72 85 Q 88 100 98 108 Q 80 110 72 85 Z M 128 85 Q 112 100 102 108 Q 120 110 128 85 Z" 
            fill="#ffffff" 
            fillOpacity="0.85" 
          />
        </g>
      );
    }
  }

  // 3. BABY CHAIRS (Panda, Baby Futura, Kidzee)
  if (category === "baby-chairs") {
    return (
      <g>
        {/* Backrest with cute bear ears or rounded top */}
        {id === "panda" && (
          <>
            <circle cx="68" cy="45" r="14" fill={color} />
            <circle cx="132" cy="45" r="14" fill={color} />
            <circle cx="68" cy="45" r="7" fill="#ffffff" fillOpacity="0.4" />
            <circle cx="132" cy="45" r="7" fill="#ffffff" fillOpacity="0.4" />
          </>
        )}
        <path d="M 64 50 Q 100 42 136 50 L 132 110 L 68 110 Z" fill={color} rx="8" />
        
        {/* Panda / cartoon face accents */}
        {id === "panda" ? (
          <>
            <circle cx="85" cy="72" r="4" fill="#0f172a" />
            <circle cx="115" cy="72" r="4" fill="#0f172a" />
            <path d="M 94 82 Q 100 88 106 82" stroke="#0f172a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <rect x="80" y="60" width="40" height="30" rx="4" fill="#ffffff" fillOpacity="0.3" />
        )}

        {/* Seat & Little Armrests */}
        <rect x="56" y="108" width="88" height="12" rx="4" fill={color} />
        <path d="M 56 85 Q 56 108 64 108" stroke={color} strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M 144 85 Q 144 108 136 108" stroke={color} strokeWidth="8" fill="none" strokeLinecap="round" />

        {/* Chubby Sturdy Legs */}
        <line x1="68" y1="120" x2="62" y2="168" stroke={color} strokeWidth="8" strokeLinecap="round" />
        <line x1="132" y1="120" x2="138" y2="168" stroke={color} strokeWidth="8" strokeLinecap="round" />
      </g>
    );
  }

  // 4. DINING & CENTER TABLES
  if (category === "dining-tables" || category === "center-tables") {
    const isRound = id === "round-dt";
    const hasWheels = id === "teapoy-wheel";
    const isCoffee = category === "center-tables";

    if (isRound) {
      return (
        <g>
          {/* Flared Legs */}
          <line x1="100" y1="100" x2="60" y2="175" stroke={color} strokeWidth="7" strokeLinecap="round" />
          <line x1="100" y1="100" x2="140" y2="175" stroke={color} strokeWidth="7" strokeLinecap="round" />
          <line x1="100" y1="100" x2="100" y2="180" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
          {/* Center Pedestal Ring */}
          <circle cx="100" cy="135" r="14" fill="none" stroke={color} strokeWidth="4" />
          {/* Round Top */}
          <ellipse cx="100" cy="85" rx="72" ry="24" fill={color} stroke="#0f172a" strokeWidth="1.5" />
          <ellipse cx="100" cy="83" rx="66" ry="20" fill="#ffffff" fillOpacity="0.2" />
        </g>
      );
    }

    return (
      <g>
        {/* Rear Legs */}
        <line x1="50" y1="90" x2="52" y2={isCoffee ? "150" : "170"} stroke="#334155" strokeWidth="6" strokeLinecap="round" />
        <line x1="150" y1="90" x2="148" y2={isCoffee ? "150" : "170"} stroke="#334155" strokeWidth="6" strokeLinecap="round" />

        {/* Lower Utility Shelf (For Teapoys) */}
        {isCoffee && (
          <path d="M 52 135 L 148 135 L 142 142 L 58 142 Z" fill={color} fillOpacity="0.8" />
        )}

        {/* Table Top Surface (Isometric Rectangular) */}
        <polygon 
          points={`25,${isCoffee ? '85' : '75'} 175,${isCoffee ? '85' : '75'} 155,${isCoffee ? '108' : '102'} 45,${isCoffee ? '108' : '102'}`} 
          fill={color} 
          stroke="#0f172a" 
          strokeWidth="1.5" 
        />
        <polygon 
          points={`30,${isCoffee ? '87' : '77'} 170,${isCoffee ? '87' : '77'} 152,${isCoffee ? '105' : '99'} 48,${isCoffee ? '105' : '99'}`} 
          fill="#ffffff" 
          fillOpacity="0.2" 
        />

        {/* Front Legs */}
        <line x1="45" y1={isCoffee ? "106" : "100"} x2="42" y2={isCoffee ? "160" : "180"} stroke={color} strokeWidth="8" strokeLinecap="round" />
        <line x1="155" y1={isCoffee ? "106" : "100"} x2="158" y2={isCoffee ? "160" : "180"} stroke={color} strokeWidth="8" strokeLinecap="round" />

        {/* Wheels for Teapoy Wheel */}
        {hasWheels && (
          <>
            <circle cx="42" cy="164" r="5" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="158" cy="164" r="5" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          </>
        )}
      </g>
    );
  }

  // 5. STOOLS & PATLA
  if (category === "stools" || category === "patla") {
    const isStepStool = id === "step-stool";
    const isPatla = category === "patla";

    if (isStepStool) {
      return (
        <g>
          {/* Step 1 (Lower) */}
          <polygon points="50,135 150,135 142,150 58,150" fill={color} />
          {/* Step 2 (Upper) */}
          <polygon points="65,95 135,95 128,110 72,110" fill={color} stroke="#0f172a" strokeWidth="1" />
          <polygon points="68,96 132,96 126,108 74,108" fill="#ffffff" fillOpacity="0.25" />
          {/* A-frame side supports */}
          <line x1="72" y1="105" x2="45" y2="180" stroke={color} strokeWidth="7" strokeLinecap="round" />
          <line x1="128" y1="105" x2="155" y2="180" stroke={color} strokeWidth="7" strokeLinecap="round" />
          <line x1="56" y1="145" x2="144" y2="145" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4" />
        </g>
      );
    }

    if (isPatla) {
      return (
        <g>
          {/* Low bathroom patla */}
          <ellipse cx="100" cy="130" rx="58" ry="18" fill={color} stroke="#0f172a" strokeWidth="1.5" />
          <ellipse cx="100" cy="128" rx="50" ry="14" fill="#ffffff" fillOpacity="0.25" />
          {/* Non-slip ring pattern */}
          <circle cx="100" cy="128" r="8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="100" cy="128" r="16" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Low stout legs */}
          <rect x="52" y="132" width="16" height="32" rx="4" fill={color} />
          <rect x="132" y="132" width="16" height="32" rx="4" fill={color} />
          <rect x="92" y="135" width="16" height="30" rx="4" fill="#334155" opacity="0.6" />
        </g>
      );
    }

    // Standard High Stool (Dabangg, Magic, Nawab, Tango)
    return (
      <g>
        {/* Back rest for Tango */}
        {id === "tango" && (
          <path d="M 80 85 Q 100 78 120 85 L 118 105 L 82 105 Z" fill={color} />
        )}
        {/* Stool Top Seat */}
        <polygon points="65,100 135,100 126,116 74,116" fill={color} stroke="#0f172a" strokeWidth="1" />
        <polygon points="68,102 132,102 124,114 76,114" fill="#ffffff" fillOpacity="0.25" />
        {/* Grip Hole */}
        <ellipse cx="100" cy="108" rx="8" ry="3" fill="#0f172a" opacity="0.6" />
        {/* 4 Tapered Legs */}
        <line x1="74" y1="116" x2="60" y2="180" stroke={color} strokeWidth="6.5" strokeLinecap="round" />
        <line x1="126" y1="116" x2="140" y2="180" stroke={color} strokeWidth="6.5" strokeLinecap="round" />
        <line x1="84" y1="114" x2="80" y2="175" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="116" y1="114" x2="120" y2="175" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
        {/* Cross brace rings */}
        <line x1="67" y1="148" x2="133" y2="148" stroke={color} strokeWidth="3" />
      </g>
    );
  }

  // 6. DEFAULT / MONOBLOC / ARMLESS / RELAX CHAIRS
  const isArmless = category === "armless-chairs";
  const isRelax = category === "relax-chairs";

  return (
    <g>
      {/* Rear Chair Legs */}
      <line x1="74" y1="115" x2="70" y2={isRelax ? "170" : "175"} stroke="#334155" strokeWidth="5" strokeLinecap="round" />
      <line x1="126" y1="115" x2="130" y2={isRelax ? "170" : "175"} stroke="#334155" strokeWidth="5" strokeLinecap="round" />

      {/* Main Backrest Contour */}
      <path 
        d={isRelax 
          ? "M 62 48 Q 100 40 138 48 L 130 120 L 70 120 Z" 
          : "M 66 32 Q 100 24 134 32 L 130 110 L 70 110 Z"} 
        fill={color} 
        stroke="#0f172a" 
        strokeWidth="1.2"
        rx="6"
      />

      {/* Backrest Texture & Ventilation Slats */}
      <line x1="82" y1="40" x2="82" y2="105" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.4" strokeLinecap="round" />
      <line x1="94" y1="36" x2="94" y2="105" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round" />
      <line x1="106" y1="36" x2="106" y2="105" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round" />
      <line x1="118" y1="40" x2="118" y2="105" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.4" strokeLinecap="round" />

      {/* Deep Seat Basin */}
      <path 
        d="M 58 108 L 142 108 L 134 125 L 66 125 Z" 
        fill={color} 
        stroke="#0f172a" 
        strokeWidth="1" 
      />
      <rect x="62" y="108" width="76" height="5" rx="2" fill="#ffffff" fillOpacity="0.25" />

      {/* Armrests (If not armless) */}
      {!isArmless && (
        <>
          <path d="M 56 70 Q 56 105 64 108" stroke={color} strokeWidth="6.5" fill="none" strokeLinecap="round" />
          <path d="M 144 70 Q 144 105 136 108" stroke={color} strokeWidth="6.5" fill="none" strokeLinecap="round" />
        </>
      )}

      {/* Front Chair Legs */}
      <line x1="68" y1="124" x2="62" y2="182" stroke={color} strokeWidth="6.5" strokeLinecap="round" />
      <line x1="132" y1="124" x2="138" y2="182" stroke={color} strokeWidth="6.5" strokeLinecap="round" />

      {/* Front lower stretcher bar */}
      <line x1="66" y1="158" x2="134" y2="158" stroke={color} strokeWidth="2.5" opacity="0.8" />
    </g>
  );
}
