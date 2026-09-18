import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import TemplateCard from './TemplateCard';
import catsData from '../data/cats.json';

const PAGE_SIZE = 15;

export default function Collection({ 
  templates, 
  selectedCategory, 
  onSelectCategory, 
  onOpenViewer 
}) {
  const { lang, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 whenever category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Filter templates based on category and search query
  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      // Category check
      const matchCat = (selectedCategory === 'all' || !selectedCategory) 
        ? true 
        : template.cat === selectedCategory;

      if (!matchCat) return false;

      // Search query check
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const name = (template.name || '').toLowerCase();
      const desc = (template.desc || '').toLowerCase();
      const cat = (template.cat || '').toLowerCase();
      const tags = Array.isArray(template.tags) ? template.tags.join(' ').toLowerCase() : '';

      return name.includes(q) || desc.includes(q) || cat.includes(q) || tags.includes(q);
    });
  }, [templates, selectedCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredTemplates.length / PAGE_SIZE));
  const validPage = Math.min(currentPage, totalPages);

  const startIndex = (validPage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, filteredTemplates.length);

  const visibleList = filteredTemplates.slice(startIndex, endIndex);

  const handleCategoryChange = (catKey) => {
    onSelectCategory(catKey);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const target = document.getElementById('koleksi');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getCatCount = (catKey) => {
    if (catKey === 'all') return templates.length;
    return templates.filter(t => t.cat === catKey).length;
  };

  const renderCountText = () => {
    const total = filteredTemplates.length;
    if (total <= PAGE_SIZE) {
      const template = t('count.showingAll', 'Menampilkan semua <b>{a}</b> template');
      const htmlStr = template.replace('{a}', total);
      return <span dangerouslySetInnerHTML={{ __html: htmlStr }} />;
    } else {
      const rangeStr = `${startIndex + 1}–${endIndex}`;
      const pageInfo = lang === 'en' 
        ? `(Page ${validPage} of ${totalPages})` 
        : `(Halaman ${validPage} dari ${totalPages})`;
      const template = t('count.showing', 'Menampilkan <b>{a}</b> dari <b>{b}</b> template');
      const htmlStr = template.replace('{a}', rangeStr).replace('{b}', total) + ` ${pageInfo}`;
      return <span dangerouslySetInnerHTML={{ __html: htmlStr }} />;
    }
  };

  return (
    <section className="collection section" id="koleksi">
      <div className="container">
        <div className="section-head reveal">
          <p className="kicker">{t('coll.kicker', 'Koleksi Template')}</p>
          <h2 dangerouslySetInnerHTML={{ __html: t('coll.h2', 'Arsip <em>81 template</em> Pilihan') }} />
          <p dangerouslySetInnerHTML={{ __html: t('coll.p', 'Jelajahi dan saring koleksi sesuai karakter brand Anda. Klik kartu untuk melihat pratinjau <em>desktop &amp; mobile</em>, lalu buka demo template aslinya.') }} />
        </div>

        <div className="col-tools reveal">
          <div className="search-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              className="search-input"
              id="searchInput"
              type="search"
              placeholder={t('coll.searchPh', 'Cari template, kategori, atau kata kunci...')}
              aria-label={t('coll.searchAria', 'Cari template')}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          <div className="chips" id="chips" role="group" aria-label={t('coll.chipsAria', 'Filter kategori')}>
            <button
              type="button"
              className={`chip ${selectedCategory === 'all' ? 'active' : ''}`}
              data-cat="all"
              onClick={() => handleCategoryChange('all')}
              aria-pressed={selectedCategory === 'all'}
            >
              {t('chip.all', 'Semua')} <small>({getCatCount('all')})</small>
            </button>

            {catsData.map(cat => {
              const isActive = selectedCategory === cat.key;
              const catLabel = t(`foot.cat.${cat.key}`, cat.label);
              return (
                <button
                  key={cat.key}
                  type="button"
                  className={`chip ${isActive ? 'active' : ''}`}
                  data-cat={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  aria-pressed={isActive}
                >
                  {catLabel} <small>({getCatCount(cat.key)})</small>
                </button>
              );
            })}
          </div>
        </div>

        <p className="col-count reveal" id="colCount" aria-live="polite">
          {filteredTemplates.length > 0 && renderCountText()}
        </p>

        {filteredTemplates.length > 0 ? (
          <>
            <div className="card-grid" id="cardGrid">
              {visibleList.map((tmpl, idx) => {
                const absIndex = templates.findIndex(t => t.name === tmpl.name);
                const displayIndex = startIndex + idx;
                return (
                  <TemplateCard
                    key={tmpl.name}
                    template={tmpl}
                    absIndex={absIndex >= 0 ? absIndex : displayIndex}
                    displayIndex={displayIndex}
                    onOpenViewer={onOpenViewer}
                  />
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="pagination-wrap" id="paginationWrap">
                <div className="pagination-controls" role="navigation" aria-label={lang === 'en' ? 'Page navigation' : 'Navigasi halaman'}>
                  <button
                    type="button"
                    className="page-btn page-nav-prev"
                    onClick={() => handlePageChange(validPage - 1)}
                    disabled={validPage === 1}
                    aria-label={lang === 'en' ? 'Previous page' : 'Halaman sebelumnya'}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                    <span>{lang === 'en' ? 'Prev' : 'Sebelumnya'}</span>
                  </button>

                  <div className="page-numbers">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        type="button"
                        className={`page-num ${pageNum === validPage ? 'active' : ''}`}
                        onClick={() => handlePageChange(pageNum)}
                        aria-current={pageNum === validPage ? 'page' : undefined}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="page-btn page-nav-next"
                    onClick={() => handlePageChange(validPage + 1)}
                    disabled={validPage === totalPages}
                    aria-label={lang === 'en' ? 'Next page' : 'Halaman berikutnya'}
                  >
                    <span>{lang === 'en' ? 'Next' : 'Berikutnya'}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="empty-state" id="emptyState" style={{ display: 'block' }}>
            <span className="es-icon">✦</span>
            <h3>{t('coll.emptyH3', 'Tidak Ada Template Ditemukan')}</h3>
            <p>{t('coll.emptyP', 'Coba kata kunci lain atau hapus filter kategori.')}</p>
            <button
              type="button"
              className="btn btn-ink"
              style={{ marginTop: '16px' }}
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
            >
              {lang === 'en' ? 'Reset Filters' : 'Reset Filter'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
