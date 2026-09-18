import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import catsData from '../data/cats.json';
import templatesData from '../data/templates.json';

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

export default function Categories({ selectedCategory, onSelectCategory }) {
  const { t } = useLanguage();

  const getCatCount = (catKey) => {
    return templatesData.filter(t => t.cat === catKey).length;
  };

  const handleCategoryClick = (catKey) => {
    onSelectCategory(catKey);
    const el = document.getElementById('koleksi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="categories section" id="kategori">
      <div className="container">
        <div className="section-head reveal">
          <p className="kicker">{t('cats.kicker', 'Peta Kategori')}</p>
          <h2 dangerouslySetInnerHTML={{ __html: t('cats.h2', 'Delapan Kategori, <em>Satu Rumah</em> Mode') }} />
          <p>{t('cats.p', 'Pilih arah brand Anda. Setiap kategori memiliki template dengan karakter visual yang sudah disesuaikan dengan kebutuhan industrinya.')}</p>
        </div>

        <div className="cat-grid" id="catGrid" role="group" aria-label={t('cats.aria', 'Pilih kategori fashion')}>
          {catsData.map((cat, idx) => {
            const count = getCatCount(cat.key);
            const isFeature = idx === 0 || idx === 1 || idx === 6 || idx === 7;
            const numStr = `0${idx + 1} / 08`;
            const isActive = selectedCategory === cat.key;
            const catLabel = t(`foot.cat.${cat.key}`, cat.label);
            const imgSrc = cat.img || FALLBACK_CATEGORY_IMAGES[cat.key];

            return (
              <button
                key={cat.key}
                type="button"
                className={`cat-tile reveal ${isActive ? 'active' : ''}`}
                data-feature={isFeature ? '' : undefined}
                data-cat={cat.key}
                onClick={() => handleCategoryClick(cat.key)}
                aria-label={`${t('card.catAria', 'Lihat template kategori ')}${catLabel}${t('card.catAriaEnd', '')}`}
              >
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={imgSrc} 
                  alt="" 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_CATEGORY_IMAGES[cat.key] || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <span className="cat-arrow" aria-hidden="true">→</span>
                <span className="cat-content">
                  <span className="cat-num">{numStr}</span>
                  <h3>{catLabel}</h3>
                  <small>{count} {t('tile.tpl', 'template')}</small>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
