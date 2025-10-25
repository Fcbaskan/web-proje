import React from 'react';

function AramaCubugu({ aramaMetni, onArama }) {
  return (
    <div className="arama-cubugu">
      <input 
        type="text" 
        placeholder="Başlık veya yazar ara..."
        value={aramaMetni}
        onChange={onArama}
      />
    </div>
  );
}

export default AramaCubugu;