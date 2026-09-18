import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Workflow() {
  const { t } = useLanguage();
  const timelineRef = useRef(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('line-anim');
          io.disconnect();
        }
      });
    }, { threshold: 0.15 });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="workflow section" id="workflow">
      <div className="container">
        <div className="section-head reveal">
          <p className="kicker center">{t('wf.kicker', 'Alur Kerja')}</p>
          <h2 dangerouslySetInnerHTML={{ __html: t('wf.h2', 'Dari Ide Menjadi <em>Etalase Digital</em>') }} />
          <p>{t('wf.p', 'Empat langkah sederhana untuk membawa brand fashion Anda ke rumah digital yang tepat.')}</p>
        </div>

        <div className="workflow-timeline" ref={timelineRef}>
          <div className="wf-item reveal">
            <span className="wf-dot" aria-hidden="true"></span>
            <span className="wf-ghost" aria-hidden="true">01</span>
            <span className="wf-tag">{t('wf.tag1', 'Langkah 01')}</span>
            <h3>{t('wf.h1', 'Konsultasi')}</h3>
            <p>{t('wf.p1', 'Ceritakan karakter brand Anda — target pasar, gaya, dan produk unggulan.')}</p>
          </div>

          <div className="wf-item reveal">
            <span className="wf-dot" aria-hidden="true"></span>
            <span className="wf-ghost" aria-hidden="true">02</span>
            <span className="wf-tag">{t('wf.tag2', 'Langkah 02')}</span>
            <h3>{t('wf.h2s', 'Pilih Template')}</h3>
            <p>{t('wf.p2', 'Pilih dari 81 template sesuai kategori, lalu sesuaikan dengan kebutuhan.')}</p>
          </div>

          <div className="wf-item reveal">
            <span className="wf-dot" aria-hidden="true"></span>
            <span className="wf-ghost" aria-hidden="true">03</span>
            <span className="wf-tag">{t('wf.tag3', 'Langkah 03')}</span>
            <h3>{t('wf.h3', 'Personalisasi')}</h3>
            <p>{t('wf.p3', 'Warna, foto, dan konten brand Anda disematkan hingga terasa milik Anda.')}</p>
          </div>

          <div className="wf-item reveal">
            <span className="wf-dot" aria-hidden="true"></span>
            <span className="wf-ghost" aria-hidden="true">04</span>
            <span className="wf-tag">{t('wf.tag4', 'Langkah 04')}</span>
            <h3>{t('wf.h4', 'Luncurkan')}</h3>
            <p>{t('wf.p4', 'Website siap online di semua perangkat — cepat, premium, dan tanpa ribet.')}</p>
          </div>
        </div>

        <div className="workflow-cta">
          <a
            className="btn btn-accent"
            href="https://optibis-digital-growth.base44.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('wf.cta', 'Konsultasikan Kebutuhan')}
          </a>
        </div>
      </div>
    </section>
  );
}
