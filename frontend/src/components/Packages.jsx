import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Packages() {
  const { t } = useLanguage();

  return (
    <section className="packages section" id="paket">
      <div className="container">
        <div className="section-head reveal">
          <p className="kicker">{t('pack.kicker', 'Paket Website')}</p>
          <h2 dangerouslySetInnerHTML={{ __html: t('pack.h2', 'Pilih Paket yang <em>Menghidupkan</em> Brand Anda') }} />
          <p>{t('pack.p', 'Mulai dari kebutuhan sederhana hingga pengalaman butik yang lengkap. Semua paket mencakup template terkurasi dan pendampingan.')}</p>
        </div>

        <div className="pack-grid">
          {/* Paket 1 */}
          <div className="pack-card reveal">
            <p className="pack-name">{t('pack.1name', 'Pakaian Dasar')}</p>
            <p className="pack-desc">{t('pack.1desc', 'Untuk brand yang baru melangkah ke dunia digital.')}</p>
            <p className="pack-price">
              <small>{t('pack.from', 'mulai')}</small> Rp 899k
            </p>
            <p className="pack-per">{t('pack.per', 'Sekali pembuatan')}</p>
            <ul className="pack-feats">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.1f1', '1 template pilihan')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.1f2', '5 halaman utama')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.1f3', 'Personalisasi dasar')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.1f4', 'Responsif semua perangkat')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.1f5', '1x revisi')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.1f6', 'Dukungan 30 hari')}
              </li>
            </ul>
            <a
              className="btn btn-outline"
              href="https://optibis-digital-growth.base44.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('pack.btn', 'Pilih Paket Website')}
            </a>
          </div>

          {/* Paket 2 - Featured */}
          <div className="pack-card featured reveal">
            <span className="pack-badge">{t('pack.2badge', 'Paling Diminati')}</span>
            <p className="pack-name">{t('pack.2name', 'Koleksi Lengkap')}</p>
            <p className="pack-desc">{t('pack.2desc', 'Keseimbangan terbaik untuk brand yang sedang tumbuh.')}</p>
            <p className="pack-price">
              <small>{t('pack.from', 'mulai')}</small> Rp 1.899k
            </p>
            <p className="pack-per">{t('pack.per', 'Sekali pembuatan')}</p>
            <ul className="pack-feats">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.2f1', '2 template pilihan')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.2f2', '10 halaman + blog')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.2f3', 'Personalisasi penuh')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.2f4', 'SEO dasar')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.2f5', 'Micro-interaction halus')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.2f6', '3x revisi + dukungan 3 bulan')}
              </li>
            </ul>
            <a
              className="btn btn-paper"
              href="https://optibis-digital-growth.base44.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('pack.btn', 'Pilih Paket Website')}
            </a>
          </div>

          {/* Paket 3 */}
          <div className="pack-card reveal">
            <p className="pack-name">{t('pack.3name', 'Boutique Eksklusif')}</p>
            <p className="pack-desc">{t('pack.3desc', 'Pengalaman penuh untuk brand fashion yang serius.')}</p>
            <p className="pack-price">
              <small>{t('pack.from', 'mulai')}</small> Rp 3.499k
            </p>
            <p className="pack-per">{t('pack.per', 'Sekali pembuatan')}</p>
            <ul className="pack-feats">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.3f1', 'Template premium pilihan')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.3f2', 'Halaman tanpa batas')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.3f3', 'Integrasi katalog & pesanan')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.3f4', 'SEO lengkap')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.3f5', 'Revisi tanpa batas (2 bulan)')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t('pack.3f6', 'Dukungan 12 bulan + pelatihan')}
              </li>
            </ul>
            <a
              className="btn btn-outline"
              href="https://optibis-digital-growth.base44.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('pack.btn', 'Pilih Paket Website')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
