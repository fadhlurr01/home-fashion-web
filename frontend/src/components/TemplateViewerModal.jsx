import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import catsData from '../data/cats.json';
import shotDesktop from '../data/shot_desktop.json';
import shotMobile from '../data/shot_mobile.json';

export default function TemplateViewerModal({ 
  viewerIndex, 
  templates, 
  onClose, 
  onNavigate 
}) {
  const { t } = useLanguage();
  const [mode, setMode] = useState('both'); // 'desktop' | 'both' | 'mobile'

  const isOpen = viewerIndex !== null && viewerIndex >= 0 && viewerIndex < templates.length;
  const currentTemplate = isOpen ? templates[viewerIndex] : null;

  const currentCategory = currentTemplate 
    ? (catsData.find(c => c.key === currentTemplate.cat) || {
        short: currentTemplate.cat,
        label: currentTemplate.cat,
        img: 'https://user.uploads.dev/file/c09e31f238d8bca15fbb81891d1c9b46.jpg'
      })
    : null;

  const deskSrc = isOpen ? (shotDesktop[viewerIndex] || currentCategory?.img) : '';
  const mobSrc = isOpen ? (shotMobile[viewerIndex] || currentCategory?.img) : '';
  const cleanUrl = (currentTemplate?.url || '').replace(/^https?:\/\//, '');
  const numStr = isOpen ? `${String(viewerIndex + 1).padStart(2, '0')} / ${String(templates.length).padStart(2, '0')}` : '';

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    document.body.classList.add('viewer-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('viewer-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, viewerIndex, templates.length]);

  if (!isOpen || !currentTemplate) return null;

  const handlePrev = () => {
    const nextIdx = viewerIndex > 0 ? viewerIndex - 1 : templates.length - 1;
    onNavigate(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = viewerIndex < templates.length - 1 ? viewerIndex + 1 : 0;
    onNavigate(nextIdx);
  };

  let stageClass = 'viewer-stage';
  if (mode === 'desktop') stageClass += ' mode-desktop';
  if (mode === 'mobile') stageClass += ' mode-mobile';

  return (
    <div 
      className="viewer" 
      id="viewer" 
      role="dialog" 
      aria-modal="true" 
      aria-label={t('viewer.aria', 'Pratinjau template')}
    >
      <div className="viewer-shell">
        <div className="viewer-topbar">
          <div className="viewer-title-wrap">
            <svg className="viewer-mark" viewBox="0 0 24 24" aria-hidden="true">
              <use href="#logoMark" />
            </svg>
            <div>
              <p className="viewer-title" id="viewerTitle">{currentTemplate.name}</p>
              <p className="viewer-meta">
                <span className="viewer-chip" id="viewerChip">{currentCategory?.short}</span>
                <span className="viewer-num" id="viewerNum">{numStr}</span>
              </p>
            </div>
          </div>

          <div className="viewer-modes" id="viewerModes" role="group" aria-label={t('viewer.modeAria', 'Mode pratinjau')}>
            <button
              type="button"
              className={`viewer-mode ${mode === 'desktop' ? 'active' : ''}`}
              data-mode="desktop"
              onClick={() => setMode('desktop')}
              aria-pressed={mode === 'desktop'}
            >
              {t('viewer.modeDesktop', 'Desktop')}
            </button>
            <button
              type="button"
              className={`viewer-mode ${mode === 'both' ? 'active' : ''}`}
              data-mode="both"
              onClick={() => setMode('both')}
              aria-pressed={mode === 'both'}
            >
              {t('viewer.modeBoth', 'Keduanya')}
            </button>
            <button
              type="button"
              className={`viewer-mode ${mode === 'mobile' ? 'active' : ''}`}
              data-mode="mobile"
              onClick={() => setMode('mobile')}
              aria-pressed={mode === 'mobile'}
            >
              {t('viewer.modeMobile', 'Mobile')}
            </button>
          </div>

          <button
            className="viewer-close"
            id="viewerClose"
            type="button"
            onClick={onClose}
            aria-label={t('viewer.closeAria', 'Tutup pratinjau')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={stageClass} id="viewerStage">
          <div className="browser" aria-hidden={mode === 'mobile' ? 'true' : 'false'}>
            <div className="browser-bar">
              <span className="browser-dots">
                <i></i><i></i><i></i>
              </span>
              <a
                className="browser-url"
                id="viewerUrl"
                href={currentTemplate.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('viewer.urlAria', 'Buka situs template di tab baru')}
              >
                {cleanUrl}
              </a>
              <span className="browser-lock" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
              </span>
            </div>
            <div className="browser-body">
              <img
                id="viewerImg"
                alt={currentTemplate.name}
                src={deskSrc}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = currentCategory?.img || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          </div>

          <div className="phone-view" aria-hidden={mode === 'desktop' ? 'true' : 'false'}>
            <span className="phone-view-notch" />
            <div className="phone-view-screen">
              <img
                id="viewerMobImg"
                alt={`${currentTemplate.name} mobile view`}
                src={mobSrc}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = currentCategory?.img || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
            <span className="phone-view-home" />
          </div>
        </div>

        <div className="viewer-foot">
          <button
            className="viewer-nav"
            id="viewerPrev"
            type="button"
            onClick={handlePrev}
            aria-label={t('viewer.prevAria', 'Template sebelumnya')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>

          <a
            className="viewer-demo"
            id="viewerDemo"
            href={currentTemplate.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('viewer.demo', 'Buka Demo Asli')}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>

          <button
            className="viewer-nav"
            id="viewerNext"
            type="button"
            onClick={handleNext}
            aria-label={t('viewer.nextAria', 'Template berikutnya')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
