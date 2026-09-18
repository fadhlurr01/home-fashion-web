import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustBar() {
  const { t } = useLanguage();
  const [c81, setC81] = useState(0);
  const [c8, setC8] = useState(0);
  const [c100, setC100] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(81, setC81, 1400);
          animateCount(8, setC8, 1000);
          animateCount(100, setC100, 1600);
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = (target, setter, duration) => {
    const start = performance.now();
    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
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
    <section className="trust-bar" aria-label={t('trust.aria', 'Kelebihan utama')} ref={ref}>
      <div className="container trust-inner">
        <div className="trust-item">
          <strong>
            <span className="count">{c81}</span>
            <em>+</em>
          </strong>
          <span>{t('trust.t1', 'Template Fashion Terkurasi')}</span>
        </div>
        <div className="trust-item">
          <strong>
            <span className="count">{c8}</span>
          </strong>
          <span>{t('trust.t2', 'Kategori Brand Khusus')}</span>
        </div>
        <div className="trust-item">
          <strong>
            <span className="count">{c100}</span>
            <em>%</em>
          </strong>
          <span>{t('trust.t3', 'Siap Pakai & Responsif')}</span>
        </div>
        <div className="trust-item">
          <strong>
            <span>24/7</span>
          </strong>
          <span>{t('trust.t4', 'Siap Online 24 Jam')}</span>
        </div>
      </div>
    </section>
  );
}
