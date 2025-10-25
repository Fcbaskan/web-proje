import React from 'react';

function KategoriFiltre({ seciliKategori, onKategoriSec, kategoriler }) {
  return (
    <div className="kategori-filtre">
      <select value={seciliKategori} onChange={onKategoriSec}>
        {kategoriler.map(kategori => (
          <option key={kategori} value={kategori}>
            {kategori}
          </option>
        ))}
      </select>
    </div>
  );
}

export default KategoriFiltre;