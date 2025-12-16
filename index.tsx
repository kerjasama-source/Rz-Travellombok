import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <header>
        <div className="logo">Rz.TravelLombok</div>
        <nav>
          <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#destinasi">Destinasi</a></li>
            <li><a href="#paket">Paket</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Jelajahi Keindahan Lombok</h1>
        <p>Surga tropis yang tersembunyi. Nikmati pantai pasir putih, pegunungan megah, dan budaya yang kaya bersama kami.</p>
        <a href="#destinasi" className="btn">Mulai Petualangan</a>
      </section>

      {/* Destinasi Populer */}
      <section id="destinasi" className="section">
        <h2 className="section-title">Destinasi Populer</h2>
        <div className="destinations-grid">
          
          {/* Card 1 */}
          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=3338&auto=format&fit=crop" 
              alt="Gili Trawangan" 
            />
            <div className="card-content">
              <h3 className="card-title">Gili Trawangan</h3>
              <p className="card-desc">Nikmati pesta pantai, diving, dan sunset yang memukau di pulau bebas kendaraan bermotor ini.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1588668214407-6ea966d80651?q=80&w=3000&auto=format&fit=crop" 
              alt="Gunung Rinjani" 
            />
            <div className="card-content">
              <h3 className="card-title">Gunung Rinjani</h3>
              <p className="card-desc">Tantang diri Anda mendaki gunung berapi tertinggi kedua di Indonesia dengan pemandangan danau segara anak.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1621873100063-44177d643669?q=80&w=3387&auto=format&fit=crop" 
              alt="Mandalika" 
            />
            <div className="card-content">
              <h3 className="card-title">Kuta Mandalika</h3>
              <p className="card-desc">Kawasan wisata super prioritas dengan sirkuit internasional dan pantai berpasir merica yang unik.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Kontak / Footer */}
      <footer id="kontak">
        <h3>Rz.TravelLombok</h3>
        <p>Hubungi kami untuk rencana perjalanan terbaik Anda.</p>
        <br />
        <p>&copy; 2024 Rz.TravelLombok. All rights reserved.</p>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
