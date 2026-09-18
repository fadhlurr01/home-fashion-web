import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section className="philosophy section" id="tentang">
      <div className="container philo-grid">
        <div className="philo-intro">
          <p className="kicker">{t('philo.kicker', 'Filosofi Kami')}</p>
          <h2 dangerouslySetInnerHTML={{ __html: t('philo.h2', 'Bukan Sekadar <em>Website.</em> Ini Rumah untuk Identitas Brand Anda.') }} />
          <p>{t('philo.p', 'Setiap brand fashion punya karakter, warna, dan cerita. Fashion-Web menghadirkan 81 template yang dirancang untuk menampung semuanya — agar koleksi Anda tampil premium, konsisten, dan hidup di setiap halaman.')}</p>
          <span className="philo-sign">{t('philo.sign', 'Fashion-Web — House of Fashion Templates')}</span>
        </div>

        <div className="philo-points">
          <div className="philo-point">
            <span className="num">N° 01</span>
            <div>
              <h3>{t('philo.n1h', 'Etalase yang Menghargai Koleksi')}</h3>
              <p>{t('philo.n1p', 'Layout editorial yang memberi ruang bagi setiap produk untuk tampil sebagai bintang — bukan sekadar daftar barang.')}</p>
            </div>
          </div>

          <div className="philo-point">
            <span className="num">N° 02</span>
            <div>
              <h3>{t('philo.n2h', 'Cerita & Karakter Brand')}</h3>
              <p>{t('philo.n2p', 'Tipografi, ritme, dan palet warna disusun seperti majalah mode — memancarkan citra premium sejak detik pertama.')}</p>
            </div>
          </div>

          <div className="philo-point">
            <span className="num">N° 03</span>
            <div>
              <h3>{t('philo.n3h', 'Meyakinkan Calon Pelanggan')}</h3>
              <p>{t('philo.n3p', 'Navigasi yang tenang, visual yang kuat, dan ajakan bertindak yang jelas — dari telusur hingga pembelian.')}</p>
            </div>
          </div>

          <div className="philo-point">
            <span className="num">N° 04</span>
            <div>
              <h3>{t('philo.n4h', 'Konsisten di Setiap Pixel')}</h3>
              <p>{t('philo.n4p', 'Responsif, cepat, dan rapi di semua perangkat — dari layar ponsel hingga tampilan desktop yang luas.')}</p>
            </div>
          </div>

          <div className="philo-point">
            <span className="num">N° 05</span>
            <div>
              <h3>{t('philo.n5h', 'Tanpa Backend, Siap Langsung')}</h3>
              <p>{t('philo.n5p', 'Semua template berdiri mandiri tanpa framework dan tanpa backend — mudah diunggah, mudah dikelola.')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
