import React from 'react';

function KitapKarti({ id, baslik, yazar, kategori, favorideMi, onToggleFavori }) {
  
  const handleFavoriClick = () => {
    onToggleFavori(id);
  };
  
  return (
    <div className="kitap-karti">
      <div className="kitap-bilgisi">
        <h3>{baslik}</h3>
        <p>{yazar} · <em>{kategori}</em></p>
      </div>
      <button 
        onClick={handleFavoriClick}
        className={favorideMi ? 'favori-btn favoride' : 'favori-btn'}
      >
        {favorideMi ? '★ Favoride' : '✩ Favori Ekle'}
      </button>
    </div>
  );
}

export default KitapKarti;