import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onSelectCategory }) {
  const { t } = useLanguage();

  const handleCategoryClick = (catKey) => {
    if (onSelectCategory) {
      onSelectCategory(catKey);
    }
    const el = document.getElementById('koleksi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#top" onClick={scrollToTop}>
              <svg className="logo-mark" aria-hidden="true">
                <use href="#logoMark" />
              </svg>
              Fashion<em>Web</em>
            </a>
            <p>{t('foot.p', 'Fashion-Web — rumah digital untuk kumpulan template website fashion Indonesia — premium, hidup, dan siap pakai.')}</p>
            <div className="footer-social">
              <a
                href="https://optibis-digital-growth.base44.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://optibis-digital-growth.base44.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 12a4 4 0 1 0 4 4V4c1 2 3 3 5 3" />
                </svg>
              </a>
              <a
                href="https://wa.me/6281234567890?text=Halo%20FashionWeb!%20Saya%20ingin%20konsultasi%20website%20fashion."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('foot.catH', 'Kategori')}</h4>
            <ul>
              <li>
                <button type="button" data-footcat="modest" onClick={() => handleCategoryClick('modest')}>
                  {t('foot.cat.modest', 'Muslimah & Modest Wear')}
                </button>
              </li>
              <li>
                <button type="button" data-footcat="luxury" onClick={() => handleCategoryClick('luxury')}>
                  {t('foot.cat.luxury', 'Boutique Luxury')}
                </button>
              </li>
              <li>
                <button type="button" data-footcat="street" onClick={() => handleCategoryClick('street')}>
                  {t('foot.cat.street', 'Casual & Streetwear')}
                </button>
              </li>
              <li>
                <button type="button" data-footcat="uniform" onClick={() => handleCategoryClick('uniform')}>
                  {t('foot.cat.uniform', 'Uniforms & Workwear')}
                </button>
              </li>
              <li>
                <button type="button" data-footcat="traditional" onClick={() => handleCategoryClick('traditional')}>
                  {t('foot.cat.traditional', 'Traditional & Ethnic Wear')}
                </button>
              </li>
              <li>
                <button type="button" data-footcat="active" onClick={() => handleCategoryClick('active')}>
                  {t('foot.cat.active', 'Activewear Sports')}
                </button>
              </li>
              <li>
                <button type="button" data-footcat="kids" onClick={() => handleCategoryClick('kids')}>
                  {t('foot.cat.kids', 'Kids & Baby')}
                </button>
              </li>
              <li>
                <button type="button" data-footcat="accessory" onClick={() => handleCategoryClick('accessory')}>
                  {t('foot.cat.accessory', 'Footwear, Bags & Accessories')}
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('foot.navH', 'Navigasi')}</h4>
            <ul>
              <li><a href="#kategori">{t('foot.nav.kategori', 'Kategori')}</a></li>
              <li><a href="#koleksi">{t('foot.nav.koleksi', 'Koleksi Template')}</a></li>
              <li><a href="#workflow">{t('foot.nav.workflow', 'Alur Kerja')}</a></li>
              <li><a href="#fitur">{t('foot.nav.fitur', 'Fitur')}</a></li>
              <li><a href="#paket">{t('foot.nav.paket', 'Paket Website')}</a></li>
              <li><a href="#faq">{t('foot.nav.faq', 'FAQ')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('foot.contH', 'Kontak')}</h4>
            <ul>
              <li>
                <a href="https://optibis-digital-growth.base44.app/" target="_blank" rel="noopener noreferrer">
                  {t('foot.konsultasi', 'Konsultasi Website')}
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281234567890?text=Halo%20FashionWeb!%20Saya%20ingin%20konsultasi%20website%20fashion." target="_blank" rel="noopener noreferrer">
                  {t('foot.wa', 'Chat WhatsApp')}
                </a>
              </li>
              <li>
                <a href="https://optibis-digital-growth.base44.app/" target="_blank" rel="noopener noreferrer">
                  {t('foot.pilih', 'Pilih Paket Website')}
                </a>
              </li>
              <li>
                <a href="https://optibis-digital-growth.base44.app/" target="_blank" rel="noopener noreferrer">
                  {t('foot.mulai', 'Mulai Proyek')}
                </a>
              </li>
              <li>
                <a href="https://optibis-digital-growth.base44.app/" target="_blank" rel="noopener noreferrer">
                  {t('foot.diskusi', 'Diskusikan Kebutuhan')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t('foot.copyright', '© 2026 Fashion-Web. Seluruh hak cipta dilindungi.')}</span>
        </div>
      </div>
    </footer>
  );
}
