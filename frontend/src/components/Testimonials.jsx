import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="testimonials section" id="testimoni">
      <div className="container">
        <div className="section-head">
          <p className="kicker">{t('testi.kicker', 'Kata Mereka')}</p>
          <h2 dangerouslySetInnerHTML={{ __html: t('testi.h2', 'Dipercaya Pemilik <em>Brand Fashion</em>') }} />
          <p>{t('testi.p', 'Cerita nyata dari mereka yang sudah menemukan rumah digital untuk brand-nya.')}</p>
        </div>

        <div className="testi-grid">
          <div className="testi-card">
            <span className="testi-stars" aria-label="Rating 5 dari 5">★★★★★</span>
            <p className="testi-quote">{t('testi.q1', 'Templatenya terasa seperti majalah mode beneran. Pelanggan sering bilang website kami terlihat lebih premium daripada harga produknya.')}</p>
            <div className="testi-person">
              <strong>Rania Putri</strong>
              <span>{t('testi.r1', 'Owner, Butik Rania — Jakarta')}</span>
            </div>
          </div>

          <div className="testi-card">
            <span className="testi-stars" aria-label="Rating 5 dari 5">★★★★★</span>
            <p className="testi-quote">{t('testi.q2', 'Prosesnya cepat dan hasilnya benar-benar mewakili karakter streetwear kami. Dari konsultasi sampai online hanya butuh beberapa hari.')}</p>
            <div className="testi-person">
              <strong>Dimas Aulia</strong>
              <span>{t('testi.r2', 'Founder, Streetlab ID — Bandung')}</span>
            </div>
          </div>

          <div className="testi-card">
            <span className="testi-stars" aria-label="Rating 5 dari 5">★★★★★</span>
            <p className="testi-quote">{t('testi.q3', 'Koleksi modest wear kami akhirnya punya rumah yang anggun dan mudah dinavigasi. Pembeli semakin percaya untuk checkout langsung.')}</p>
            <div className="testi-person">
              <strong>Nabila Zahra</strong>
              <span>{t('testi.r3', 'Brand Manager, Zahra Modest — Surabaya')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
