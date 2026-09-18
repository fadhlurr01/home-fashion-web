import React, { useState, useEffect } from 'react';
import SvgSymbols from './components/SvgSymbols';
import SiteNav from './components/SiteNav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import TrustBar from './components/TrustBar';
import Philosophy from './components/Philosophy';
import Categories from './components/Categories';
import Collection from './components/Collection';
import TemplateViewerModal from './components/TemplateViewerModal';
import Workflow from './components/Workflow';
import Features from './components/Features';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

import { fetchTemplates } from './services/api';
import localTemplates from './data/templates.json';

export default function App() {
  const [templates, setTemplates] = useState(localTemplates);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewerIndex, setViewerIndex] = useState(null);

  useEffect(() => {
    // Attempt loading dynamic templates from backend API
    fetchTemplates().then(data => {
      if (Array.isArray(data) && data.length > 0) {
        setTemplates(data);
      }
    }).catch(err => {
      console.log('Using bundled high-fidelity fallback templates', err);
    });
  }, []);

  // IntersectionObserver to reveal sections and cards (.reveal -> .is-visible)
  useEffect(() => {
    let io = null;

    const observeReveals = () => {
      const reveals = document.querySelectorAll('.reveal:not(.is-visible)');
      if (!reveals.length) return;

      if (!('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('is-visible'));
        return;
      }

      if (!io) {
        io = new IntersectionObserver((entries) => {
          entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (!el.classList.contains('wf-item')) {
                el.style.transitionDelay = `${Math.min(idx * 45, 360)}ms`;
              }
              el.classList.add('is-visible');
              io.unobserve(el);
            }
          });
        }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
      }

      const vh = window.innerHeight || document.documentElement.clientHeight;
      reveals.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        // If element is already in viewport, reveal it immediately
        if (rect.top < vh + 100 && rect.bottom > 0) {
          if (!el.classList.contains('wf-item')) {
            el.style.transitionDelay = `${Math.min(idx * 45, 360)}ms`;
          }
          el.classList.add('is-visible');
        } else {
          io.observe(el);
        }
      });
    };

    // Run immediately and staggered
    observeReveals();
    const t1 = setTimeout(observeReveals, 50);
    const t2 = setTimeout(observeReveals, 300);

    // Observe DOM changes (e.g. category filter, search query, load more)
    const mo = new MutationObserver(() => {
      observeReveals();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (io) io.disconnect();
      mo.disconnect();
    };
  }, [templates, selectedCategory]);

  const handleOpenViewer = (idx) => {
    setViewerIndex(idx);
  };

  const handleCloseViewer = () => {
    setViewerIndex(null);
  };

  const handleNavigateViewer = (newIdx) => {
    setViewerIndex(newIdx);
  };

  return (
    <>
      <SvgSymbols />
      <SiteNav onSelectCategory={setSelectedCategory} />
      <main id="top">
        <Hero />
        <Marquee />
        <TrustBar />
        <Philosophy />
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <Collection
          templates={templates}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenViewer={handleOpenViewer}
        />
        <Workflow />
        <Features />
        <Packages />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer onSelectCategory={setSelectedCategory} />

      <TemplateViewerModal
        viewerIndex={viewerIndex}
        templates={templates}
        onClose={handleCloseViewer}
        onNavigate={handleNavigateViewer}
      />

      <FloatingButtons />
    </>
  );
}
