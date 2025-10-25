import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'; 

import AramaCubugu from './AramaCubugu';
import KategoriFiltre from './KategoriFiltre';
import KitapListe from './KitapListe';
import FavoriPaneli from './FavoriPaneli';

const BASLANGIC_KITAPLAR = [
  { id: 1, baslik: "React'e Giriş", yazar: "D. Usta", kategori: "Web", favorideMi: false },
  { id: 2, baslik: "İleri JavaScript", yazar: "S. Kılıç", kategori: "Web", favorideMi: false },
  { id: 3, baslik: "Veri Yapıları", yazar: "A. Demir", kategori: "CS", favorideMi: false },
  { id: 4, baslik: "Algoritmalar", yazar: "E. Kaya", kategori: "CS", favorideMi: false },
  { id: 5, baslik: "UI/UX Temelleri", yazar: "N. Akın", kategori: "Tasarım", favorideMi: false }
];

const getLocalStorage = (key, baslangicDegeri) => {
  const saklananDeger = localStorage.getItem(key);

  if (saklananDeger) {
    return JSON.parse(saklananDeger);
  }

  return baslangicDegeri;
};


function App() {
  const [kitaplar] = React.useState(BASLANGIC_KITAPLAR);
  
  const [aramaMetni, setAramaMetni] = React.useState(
    getLocalStorage('aramaMetni', '') 
  );
  
  const [kategori, setKategori] = React.useState('Tümü');
  
  const [favoriIdleri, setFavoriIdleri] = React.useState(
    getLocalStorage('favoriler', [])
  );

  React.useEffect(() => {
    localStorage.setItem('aramaMetni', JSON.stringify(aramaMetni));
  }, [aramaMetni]);

  React.useEffect(() => {
    localStorage.setItem('favoriler', JSON.stringify(favoriIdleri));
  }, [favoriIdleri]);

  const handleArama = (event) => {
    setAramaMetni(event.target.value);
  };

  const handleKategoriSec = (event) => {
    setKategori(event.target.value);
  };

  const handleToggleFavori = (kitapId) => {

    const favoriMi = favoriIdleri.includes(kitapId);
    
    let yeniFavoriler;
    if (favoriMi) {
      yeniFavoriler = favoriIdleri.filter(id => id !== kitapId);
    } else {
      yeniFavoriler = [...favoriIdleri, kitapId];
    }
    setFavoriIdleri(yeniFavoriler);
  };

  const kategoriFiltreli = kategori === 'Tümü'
    ? kitaplar
    : kitaplar.filter(kitap => kitap.kategori === kategori);

  const aramaFiltreli = kategoriFiltreli.filter(kitap => 
    kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
    kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
  );
  
  const goruntulenecekKitaplar = aramaFiltreli;

  const favoriKitaplar = kitaplar.filter(kitap => 
    favoriIdleri.includes(kitap.id)
  );
  
  const kategoriler = ['Tümü', ...new Set(kitaplar.map(kitap => kitap.kategori))];

  return (
    <> 
      <header className="header-container">
        <h1>Mini Kitaplık</h1>
        <div className="arama-filtre-container">
          <AramaCubugu 
            aramaMetni={aramaMetni} 
            onArama={handleArama} 
          />
          <KategoriFiltre 
            seciliKategori={kategori}
            onKategoriSec={handleKategoriSec}
            kategoriler={kategoriler}
          />
        </div>
      </header>

      <main className="main-content">
        <div className="kitap-listesi-container">
          <KitapListe 
            kitaplar={goruntulenecekKitaplar} 
            favoriIdleri={favoriIdleri}
            onToggleFavori={handleToggleFavori}
          />
        </div>
        
        <div className="favori-paneli-container">
          <FavoriPaneli 
            favoriKitaplar={favoriKitaplar}
            onToggleFavori={handleToggleFavori}
          />
        </div>
      </main>
    </>
  );
}

export default App;