import React from 'react';

const CATEGORY_NAMES = [
  'Muslimah & Modest Wear',
  'Boutique Luxury',
  'Casual & Streetwear',
  'Uniforms & Workwear',
  'Traditional & Ethnic Wear',
  'Activewear Sports',
  'Kids & Baby',
  'Footwear, Bags & Accessories'
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-group">
          {CATEGORY_NAMES.map((name, idx) => (
            <React.Fragment key={`group1-${idx}`}>
              <span>{name}</span>
              <i>✦</i>
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-group">
          {CATEGORY_NAMES.map((name, idx) => (
            <React.Fragment key={`group2-${idx}`}>
              <span>{name}</span>
              <i>✦</i>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
