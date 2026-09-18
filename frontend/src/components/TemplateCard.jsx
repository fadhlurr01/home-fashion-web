import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import descEn from '../data/desc_en.json';
import catsData from '../data/cats.json';
import shotDesktop from '../data/shot_desktop.json';
import shotMobile from '../data/shot_mobile.json';

const FALLBACK_CATEGORY_IMAGES = {
  modest: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
  luxury: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
  street: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
  uniform: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80',
  traditional: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
  active: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  kids: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80',
  accessory: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
};

export default function TemplateCard({ template, absIndex, displayIndex, onOpenViewer }) {
  const { lang, t } = useLanguage();
  const imgRef = useRef(null);
  const isHoveredRef = useRef(false);
  const [imgErrorCount, setImgErrorCount] = useState(0);

  const category = catsData.find(c => c.key === template.cat) || {
    key: template.cat,
    label: template.cat,
    short: template.cat,
    img: FALLBACK_CATEGORY_IMAGES[template.cat] || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
  };

  const primarySrc = shotDesktop[absIndex] || shotMobile[absIndex] || category.img;
  const description = (lang === 'en' && descEn[template.name]) ? descEn[template.name] : template.desc;
  const numFormatted = String((displayIndex == null ? absIndex : displayIndex) + 1).padStart(2, '0');
  const cleanUrl = (template.url || '').replace(/^https?:\/\//, '');

  const previewAria = lang === 'en' 
    ? `View preview for ${template.name}` 
    : `Lihat pratinjau ${template.name}`;

  const demoAria = lang === 'en'
    ? `Open demo for ${template.name} in a new tab`
    : `Buka demo ${template.name} di tab baru`;

  // Reset scroll position if the template or image changes
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.transition = '';
      imgRef.current.style.transform = 'translateY(0px)';
    }
  }, [primarySrc, template.name]);

  // When cursor enters the card/preview: smoothly scroll down to the bottom of the template
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    const img = imgRef.current;
    if (!img) return;
    const shot = img.closest('.device-shot');
    if (!shot) return;

    const startScroll = () => {
      if (!isHoveredRef.current) return;
      const scrollDist = img.offsetHeight - shot.offsetHeight;
      if (scrollDist > 0) {
        // Comfortable, smooth reading speed proportional to template length
        const duration = Math.max(2.5, Math.min(6.5, scrollDist / 200));
        img.style.transition = `transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
        img.style.transform = `translateY(-${scrollDist}px)`;
      }
    };

    if (img.complete && img.naturalHeight > 0) {
      startScroll();
    } else {
      img.addEventListener('load', startScroll, { once: true });
    }
  };

  // When cursor leaves the card/preview: smoothly return back to top
  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    const img = imgRef.current;
    if (!img) return;
    img.style.transition = 'transform 0.75s cubic-bezier(0.25, 1, 0.5, 1)';
    img.style.transform = 'translateY(0px)';
  };

  const handleImgError = (e) => {
    if (imgErrorCount === 0) {
      setImgErrorCount(1);
      e.currentTarget.src = category.img;
    } else if (imgErrorCount === 1) {
      setImgErrorCount(2);
      e.currentTarget.src = FALLBACK_CATEGORY_IMAGES[template.cat] || FALLBACK_CATEGORY_IMAGES.luxury;
    }
  };

  return (
    <article 
      className="card reveal" 
      data-cat={template.cat} 
      data-idx={absIndex}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="card-preview"
        aria-label={previewAria}
        onClick={() => onOpenViewer(absIndex)}
      >
        <span className="device-browser" aria-hidden="true">
          <span className="device-bar">
            <i></i><i></i><i></i>
            <span className="device-url">{cleanUrl}</span>
          </span>
          <span className="device-shot">
            <img
              ref={imgRef}
              decoding="async"
              src={primarySrc}
              alt=""
              onError={handleImgError}
            />
          </span>
        </span>
        <span className="preview-num" aria-hidden="true">{numFormatted}</span>
        <span className="preview-chip">{category.short}</span>
        <span className="preview-hint" aria-hidden="true">
          {t('card.hint', 'Klik pratinjau — Desktop & Mobile')}
        </span>
      </button>

      <div className="card-body">
        <h3 className="card-name">{template.name}</h3>
        <p className="card-desc">{description}</p>
        <a
          className="card-demo"
          href={template.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={demoAria}
        >
          {t('card.demo', 'Buka Demo')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
    </article>
  );
}
