import React from 'react';

function FavoriPaneli({ favoriKitaplar, onToggleFavori }) {
  return (
    <div className="favori-paneli">
      <h2>Favoriler ({favoriKitaplar.length})</h2>
      
      {favoriKitaplar.length === 0 ? (
        <p>Henüz favori kitap eklenmedi.</p>
      ) : (
        <ul>
          {favoriKitaplar.map(kitap => (
            <li key={kitap.id}>
              <span>{kitap.baslik}</span>
              <button 
                onClick={() => onToggleFavori(kitap.id)}
                className="kaldir-btn"
              >
                Kaldır
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriPaneli;