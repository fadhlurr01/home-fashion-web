import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="features section" id="fitur">
      <div className="container">
        <div className="section-head reveal">
          <p className="kicker">{t('feat.kicker', 'Kenapa Kami')}</p>
          <h2 dangerouslySetInnerHTML={{ __html: t('feat.h2', 'Dirancang <em>Premium,</em> Dibangun untuk Tumbuh') }} />
          <p>{t('feat.p', 'Setiap template dibuat dengan standar majalah mode — estetika tinggi tanpa mengorbankan performa.')}</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card reveal">
            <span className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
                <path d="M19 15l.9 2.6L22.5 18.5l-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9z" />
              </svg>
            </span>
            <h3>{t('feat.f1h', 'Estetika Editorial')}</h3>
            <p>{t('feat.f1p', 'Tipografi fashion dan ritme majalah yang membuat koleksi Anda tampil berkelas.')}</p>
          </div>

          <div className="feature-card reveal">
            <span className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <path d="M11 18h2" />
              </svg>
            </span>
            <h3>{t('feat.f2h', 'Responsif Mobile')}</h3>
            <p>{t('feat.f2p', 'Rapi di setiap layar — dari ponsel hingga desktop, tanpa elemen yang berantakan.')}</p>
          </div>

          <div className="feature-card reveal">
            <span className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 20a8 8 0 1 1 8-8" />
                <path d="M12 12l4-3" />
              </svg>
            </span>
            <h3>{t('feat.f3h', 'Performa Cepat')}</h3>
            <p>{t('feat.f3p', 'Ringan dan dioptimalkan — pengunjung tidak perlu menunggu lama untuk terpukau.')}</p>
          </div>

          <div className="feature-card reveal">
            <span className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
              </svg>
            </span>
            <h3>{t('feat.f4h', 'Mudah Disesuaikan')}</h3>
            <p>{t('feat.f4p', 'Warna, foto, dan konten dapat diganti dengan mudah sesuai identitas brand Anda.')}</p>
          </div>

          <div className="feature-card reveal">
            <span className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </span>
            <h3>{t('feat.f5h', 'SEO Ramah')}</h3>
            <p>{t('feat.f5p', 'Struktur dan markup yang bersih membantu brand Anda ditemukan lebih mudah.')}</p>
          </div>

          <div className="feature-card reveal">
            <span className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <h3>{t('feat.f6h', 'Dukungan Konsultasi')}</h3>
            <p>{t('feat.f6p', 'Tim kami siap membantu Anda memilih dan menyesuaikan template yang paling tepat.')}</p>
          </div>
        </div>

        <div className="features-cta reveal">
          <p>{t('feat.ctaP', 'Masih ragu template mana yang paling cocok?')}</p>
          <a
            className="btn btn-ink"
            href="https://wa.me/6281234567890?text=Halo%20FashionWeb!%20Saya%20ingin%20konsultasi%20website%20fashion."
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('feat.ctaBtn', 'Diskusikan Kebutuhan')}
          </a>
        </div>
      </div>
    </section>
  );
}
