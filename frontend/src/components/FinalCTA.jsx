import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="cta-final">
      <span className="float-label" style={{ top: '14%', left: '8%' }}>
        Muslimah &amp; Modest
      </span>
      <span className="float-label" style={{ bottom: '16%', right: '7%', animationDelay: '-2s' }}>
        Streetwear
      </span>
      <div className="container">
        <h2 dangerouslySetInnerHTML={{ __html: t('cta.h2', 'Siap Menempatkan Brand Anda di <em>Rumah yang Tepat?</em>') }} />
        <p>{t('cta.p', 'Konsultasikan kebutuhan website fashion Anda hari ini — gratis, tanpa komitmen, dan dengan saran template yang benar-benar sesuai karakter brand.')}</p>
        <a
          className="btn btn-paper"
          href="https://optibis-digital-growth.base44.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('cta.start', 'Mulai Proyek')}
        </a>
        <a
          className="btn btn-outline-light"
          href="https://wa.me/6281234567890?text=Halo%20FashionWeb!%20Saya%20ingin%20konsultasi%20website%20fashion."
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('cta.consult', 'Konsultasi Website')}
        </a>
      </div>
    </section>
  );
}
