import React, { useState, useEffect } from 'react';
import './Magic.scss';

function Magic() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/spells')
      .then((response) => response.json())
      .then((data) => setSpells(data))
      .catch((error) => console.error('Error fetching spells:', error));
  }, []);

  return (
    <div className="magic-container">
      <div className="spells-list">
        <h2>Spells List</h2>
        <ul>
          {spells.map((spell) => (
            <li key={spell.id}>
              <strong>{spell.name}</strong>: {spell.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Magic;
