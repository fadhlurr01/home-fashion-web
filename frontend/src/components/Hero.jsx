import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const [count81, setCount81] = useState(0);
  const [count8, setCount8] = useState(0);
  const [count100, setCount100] = useState(0);
  const [count24, setCount24] = useState(0);

  const statsRef = useRef(null);

  useEffect(() => {
    // Easing count up animation when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(81, setCount81, 1400);
          animateCount(8, setCount8, 1000);
          animateCount(100, setCount100, 1600);
          animateCount(24, setCount24, 1200);
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const animateCount = (target, setter, duration) => {
    const start = performance.now();
    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      // easeOutCubic
      const val = Math.floor((1 - Math.pow(1 - progress, 3)) * target);
      setter(val);
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setter(target);
      }
    };
    requestAnimationFrame(update);
  };

  return (
    <section className="hero">
      <div className="hero-grid-lines" aria-hidden="true"></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="kicker hero-kicker">
            <span className="float-label" style={{ position: 'static', marginRight: '6px', boxShadow: 'none', animation: 'none' }}>
              Est. 2026
            </span>{' '}
            <span>{t('hero.kicker', 'Rumah Digital Koleksi Template Fashion')}</span>
          </p>
          <h1 dangerouslySetInnerHTML={{ __html: t('hero.h1', 'Temukan <em>Rumah Digital</em> untuk Brand Fashion Anda.') }} />
          <p className="hero-desc">
            {t('hero.desc', 'Eksplorasi koleksi template website fashion untuk berbagai karakter brand — mulai dari modest wear, boutique luxury, streetwear, workwear, pakaian tradisional, activewear, kidswear, hingga accessories.')}
          </p>

          <div className="hero-cta">
            <a className="btn btn-ink" href="#koleksi">
              {t('hero.explore', 'Eksplorasi Koleksi')}{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a 
              className="btn btn-outline" 
              href="https://wa.me/6281234567890?text=Halo%20FashionWeb!%20Saya%20ingin%20konsultasi%20website%20fashion." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('hero.consult', 'Konsultasi Website')}
            </a>
          </div>

          <ul className="hero-stats" ref={statsRef}>
            <li>
              <strong>
                <span className="count">{count81}</span>
                <em>+</em>
              </strong>
              <span>{t('hero.stat1', 'Template Fashion Terkurasi')}</span>
            </li>
            <li>
              <strong>
                <span className="count">{count8}</span>
              </strong>
              <span>{t('hero.stat2', 'Kategori Brand Khusus')}</span>
            </li>
            <li>
              <strong>
                <span className="count">{count100}</span>
                <em>%</em>
              </strong>
              <span>{t('hero.stat3', 'Siap Pakai & Responsif')}</span>
            </li>
            <li>
              <strong>
                <span className="count">{count24}</span>
                <em>/7</em>
              </strong>
              <span>{t('hero.stat4', 'Siap Online 24 Jam')}</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <figure className="hero-img-main">
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85" 
              alt="Model fashion wanita dengan busana editorial elegan di studio" 
              decoding="async"
            />
            <figcaption className="hero-caption-pill">{t('hero.fig1', 'Koleksi Editorial — Vol. 01')}</figcaption>
          </figure>

          <figure className="hero-img-small">
            <img 
              src="https://user.uploads.dev/file/8193466b467a1f9a98ec665f2166bad3.jpg" 
              alt="Model busana muslimah modest wear gaun anggun" 
              decoding="async" 
            />
            <figcaption className="hero-caption-tag">{t('hero.fig2', 'Modest & Chic')}</figcaption>
          </figure>

          {/* Luxury Embossed Seal with serif monogram */}
          <div className="seal">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="sealCircle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text>
                <textPath href="#sealCircle">FASHION-WEB &bull; ARCHIVE 2026 &bull; ATELIER &bull; </textPath>
              </text>
            </svg>
            <span className="seal-center-mark" aria-hidden="true">FW</span>
          </div>

          {/* Refined Glassmorphic Editorial Callout Badges */}
          <div className="hero-float-pill float-pill-top">
            <span className="pill-dot">✦</span>
            <span>{t('hero.floatBoutique', 'Boutique Luxury & Ready-to-Wear')}</span>
          </div>

          <div className="hero-float-card float-card-bottom">
            <div className="card-rating">★★★★★</div>
            <p className="card-tagline">{t('hero.floatCurated', '81 Koleksi Terkurasi')}</p>
            <span className="card-sub">{t('hero.floatSub', '8 Kategori Brand Khusus')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
