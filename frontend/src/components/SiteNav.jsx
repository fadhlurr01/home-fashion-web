import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import catsData from '../data/cats.json';

const CAT_COUNTS = {
  all: 81,
  luxury: 23,
  modest: 11,
  street: 10,
  kids: 8,
  accessory: 8,
  uniform: 7,
  traditional: 7,
  active: 7
};

const CAT_ICONS = {
  all: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5"/>
    </svg>
  ),
  modest: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  luxury: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h12l4 6-10 12L2 9l4-6z"/>
    </svg>
  ),
  street: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M7 14l5 3 5-3"/>
      <path d="M5 18l7 4 7-4"/>
    </svg>
  ),
  uniform: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  traditional: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 3a9 9 0 0 0 0 18"/>
      <path d="M12 8a4 4 0 0 0 0 8"/>
    </svg>
  ),
  active: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  kids: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  accessory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  workflow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  fitur: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
};

export default function SiteNav({ onSelectCategory }) {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionDropOpen, setCollectionDropOpen] = useState(false);
  const [servicesDropOpen, setServicesDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const collectionDropRef = useRef(null);
  const servicesDropRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 24);

      const totalH = document.documentElement.scrollHeight - window.innerHeight;
      if (totalH > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (y / totalH) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (collectionDropRef.current && !collectionDropRef.current.contains(e.target)) {
        setCollectionDropOpen(false);
      }
      if (servicesDropRef.current && !servicesDropRef.current.contains(e.target)) {
        setServicesDropOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setCollectionDropOpen(false);
        setServicesDropOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCategoryClick = (catKey) => {
    setCollectionDropOpen(false);
    setMobileMenuOpen(false);
    if (onSelectCategory) {
      onSelectCategory(catKey);
    }
    const target = document.getElementById('koleksi');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setCollectionDropOpen(false);
    setServicesDropOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#koleksi">
        {t('skip', 'Langsung ke koleksi template')}
      </a>

      <div 
        className="scroll-progress" 
        id="scrollBar" 
        aria-hidden="true" 
        style={{ width: `${scrollProgress}%` }}
      />

      <header className={`site-nav ${scrolled ? 'scrolled' : ''}`} id="siteNav">
        <nav className="nav-inner" aria-label="Navigasi utama">
          <a className="brand" href="#top" onClick={closeMobile}>
            <svg className="logo-mark" aria-hidden="true">
              <use href="#logoMark" />
            </svg>
            Fashion<em>Web</em>
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="navLinks">
            <li className="nav-panel-head">
              <span className="brand">
                <svg className="logo-mark" aria-hidden="true">
                  <use href="#logoMark" />
                </svg>
                Fashion<em>Web</em>
              </span>
              <div className="nav-head-actions">
                <button 
                  className="theme-toggle" 
                  type="button" 
                  onClick={toggleTheme}
                  aria-label={t('theme.toggleAria', 'Ganti mode gelap / terang')}
                  title="Dark / Light"
                >
                  <svg className="ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  <svg className="ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                </button>

                <div className="lang-toggle" role="group" aria-label="Pilih bahasa">
                  <button 
                    type="button" 
                    className={lang === 'id' ? 'active' : ''} 
                    aria-pressed={lang === 'id'}
                    onClick={() => setLang('id')}
                  >
                    ID
                  </button>
                  <button 
                    type="button" 
                    className={lang === 'en' ? 'active' : ''} 
                    aria-pressed={lang === 'en'}
                    onClick={() => setLang('en')}
                  >
                    EN
                  </button>
                </div>

                <button 
                  className="nav-close" 
                  id="navClose" 
                  type="button" 
                  onClick={closeMobile}
                  aria-label={t('nav.closeAria', 'Tutup menu navigasi')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </li>

            {/* Dropdown Koleksi */}
            <li className={`has-drop ${collectionDropOpen ? 'open' : ''}`} ref={collectionDropRef}>
              <button 
                type="button" 
                className="nav-link-btn" 
                aria-haspopup="true" 
                aria-expanded={collectionDropOpen}
                aria-controls="dropCollection"
                onClick={(e) => {
                  e.stopPropagation();
                  setCollectionDropOpen(prev => !prev);
                  setServicesDropOpen(false);
                }}
              >
                <span>{t('nav.koleksi', 'Koleksi')}</span>
                <svg className="drop-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className={`drop-panel ${collectionDropOpen ? 'open' : ''}`} id="dropCollection">
                <div className="drop-head">
                  <span>{t('nav.kategori', 'Kategori')}</span>
                </div>
                <a 
                  className="drop-link" 
                  href="#koleksi" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick('all');
                  }}
                >
                  <span className="drop-icon">{CAT_ICONS.all}</span>
                  <span className="drop-text">{t('nav.allTemplates', 'Semua Template')}</span>
                  <span className="drop-badge">81</span>
                  <svg className="drop-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
                {catsData.map(cat => (
                  <a
                    key={cat.key}
                    className="drop-link"
                    href="#koleksi"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(cat.key);
                    }}
                  >
                    <span className="drop-icon">{CAT_ICONS[cat.key] || CAT_ICONS.all}</span>
                    <span className="drop-text">{t(`foot.cat.${cat.key}`, cat.label)}</span>
                    <span className="drop-badge">{CAT_COUNTS[cat.key] || 0}</span>
                    <svg className="drop-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </a>
                ))}
              </div>
            </li>

            {/* Dropdown Layanan */}
            <li className={`has-drop ${servicesDropOpen ? 'open' : ''}`} ref={servicesDropRef}>
              <button 
                type="button" 
                className="nav-link-btn" 
                aria-haspopup="true" 
                aria-expanded={servicesDropOpen}
                aria-controls="dropLayanan"
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesDropOpen(prev => !prev);
                  setCollectionDropOpen(false);
                }}
              >
                <span>{t('nav.layanan', 'Layanan')}</span>
                <svg className="drop-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className={`drop-panel ${servicesDropOpen ? 'open' : ''}`} id="dropLayanan">
                <div className="drop-head">
                  <span>{t('nav.layanan', 'Layanan')}</span>
                </div>
                <a className="drop-link" href="#workflow" onClick={closeMobile}>
                  <span className="drop-icon">{CAT_ICONS.workflow}</span>
                  <span className="drop-text">{t('nav.workflow', 'Alur Kerja')}</span>
                  <svg className="drop-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
                <a className="drop-link" href="#fitur" onClick={closeMobile}>
                  <span className="drop-icon">{CAT_ICONS.fitur}</span>
                  <span className="drop-text">{t('nav.fitur', 'Fitur')}</span>
                  <svg className="drop-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              </div>
            </li>

            <li>
              <a href="#paket" onClick={closeMobile}>{t('nav.paket', 'Paket')}</a>
            </li>
            <li>
              <a href="#faq" onClick={closeMobile}>{t('nav.faq', 'FAQ')}</a>
            </li>

            <li className="nav-cta-panel">
              <a 
                className="nav-cta" 
                href="https://wa.me/6281234567890?text=Halo%20FashionWeb!%20Saya%20ingin%20konsultasi%20website%20fashion." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('nav.cta', 'Konsultasi Gratis')}
              </a>
            </li>
          </ul>

          <div className="nav-right">
            <div className="lang-toggle" role="group" aria-label="Pilih bahasa">
              <button 
                type="button" 
                className={lang === 'id' ? 'active' : ''} 
                aria-pressed={lang === 'id'}
                onClick={() => setLang('id')}
              >
                ID
              </button>
              <button 
                type="button" 
                className={lang === 'en' ? 'active' : ''} 
                aria-pressed={lang === 'en'}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>

            <button 
              className="theme-toggle" 
              type="button" 
              onClick={toggleTheme}
              aria-label={t('theme.toggleAria', 'Ganti mode gelap / terang')}
              title="Dark / Light"
            >
              <svg className="ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              <svg className="ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </button>

            <a 
              className="nav-cta nav-cta-desk" 
              href="https://wa.me/6281234567890?text=Halo%20FashionWeb!%20Saya%20ingin%20konsultasi%20website%20fashion." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('nav.cta', 'Konsultasi Gratis')}
            </a>
          </div>

          <button 
            className="nav-toggle" 
            id="navToggle" 
            aria-expanded={mobileMenuOpen}
            aria-controls="navLinks" 
            aria-label={t('nav.toggleAria', 'Buka menu navigasi')}
            onClick={() => setMobileMenuOpen(prev => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
    </>
  );
}
