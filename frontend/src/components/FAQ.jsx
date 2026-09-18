import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: t('faq.q1', 'Apa itu Fashion-Web dan untuk siapa?'),
      a: t('faq.a1', 'Fashion-Web adalah koleksi 81 template website fashion yang siap pakai, dikurasi untuk 8 kategori brand — dari Muslimah & Modest Wear, Boutique Luxury, hingga Footwear, Bags & Accessories. Dirancang untuk brand fashion yang ingin tampil profesional secara online tanpa ribet.')
    },
    {
      q: t('faq.q2', 'Bagaimana cara melihat pratinjau template?'),
      a: t('faq.a2', 'Klik kartu template pada bagian Koleksi. Pratinjau menampilkan versi desktop dan mobile sekaligus — Anda bisa memilih mode Desktop, Mobile, atau Keduanya. Ingin melihat langsung? Tekan "Buka Demo Asli" untuk membuka situs asli template di tab baru.')
    },
    {
      q: t('faq.q3', 'Apakah template sudah responsif di semua perangkat?'),
      a: t('faq.a3', 'Tentu. Setiap template sudah 100% siap pakai dan responsif — tampil rapi di desktop, tablet, maupun smartphone. Anda bisa memeriksanya sendiri lewat pratinjau mode Mobile di setiap kartu.')
    },
    {
      q: t('faq.q4', 'Bisa memilih template sesuai kategori brand saya?'),
      a: t('faq.a4', 'Bisa. Delapan kategori brand khusus tersedia — Muslimah & Modest Wear, Boutique Luxury, Casual & Streetwear, Uniforms & Workwear, Traditional & Ethnic Wear, Activewear, Kids & Baby, serta Footwear, Bags & Accessories. Gunakan filter kategori atau kolom pencarian untuk menemukan yang paling cocok.')
    },
    {
      q: t('faq.q5', 'Apakah saya perlu bisa coding untuk memakainya?'),
      a: t('faq.a5', 'Tidak perlu. Semua template berdiri mandiri tanpa framework dan tanpa backend — Anda tinggal mengisi foto produk dan informasi brand. Butuh penyesuaian lebih lanjut? Tim kami siap membantu personalisasinya.')
    },
    {
      q: t('faq.q6', 'Bagaimana cara memulainya?'),
      a: t('faq.a6', 'Klik tombol "Konsultasi Website" atau "Pilih Paket Website". Ceritakan kebutuhan brand fashion Anda, dan kami akan merekomendasikan template yang paling tepat beserta langkah selanjutnya.')
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <p className="kicker">{t('faq.kicker', 'Pertanyaan Umum')}</p>
          <h2 dangerouslySetInnerHTML={{ __html: t('faq.h2', 'Yang Sering <em>Ditanyakan</em>') }} />
        </div>

        <div className="faq-grid">
          <div>
            {faqs.slice(0, 3).map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="faq-item reveal">
                  <button
                    className="faq-q"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div 
                    className="faq-a" 
                    style={{ 
                      maxHeight: isOpen ? '240px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height .45s cubic-bezier(.22,1,.36,1), padding .3s ease'
                    }}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            {faqs.slice(3, 6).map((item, idx) => {
              const realIdx = idx + 3;
              const isOpen = openIndex === realIdx;
              return (
                <div key={realIdx} className="faq-item reveal">
                  <button
                    className="faq-q"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(realIdx)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div 
                    className="faq-a" 
                    style={{ 
                      maxHeight: isOpen ? '240px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height .45s cubic-bezier(.22,1,.36,1), padding .3s ease'
                    }}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
