import React from 'react';
import KitapKarti from './KitapKarti';

function KitapListe({ kitaplar, favoriIdleri, onToggleFavori }) {
  return (
    <div className="kitap-listesi">
      {kitaplar.map(kitap => {
        const favorideMi = favoriIdleri.includes(kitap.id);
        
        return (
          <KitapKarti 
            key={kitap.id}
            id={kitap.id}
            baslik={kitap.baslik}
            yazar={kitap.yazar}
            kategori={kitap.kategori}
            favorideMi={favorideMi}
            onToggleFavori={onToggleFavori}
          />
        );
      })}
    </div>
  );
}

export default KitapListe;