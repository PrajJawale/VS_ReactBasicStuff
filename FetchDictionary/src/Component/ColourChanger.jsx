import React, { useState } from 'react';

function ColourChanger() {
  const [colour, setColor] = useState('black');

  function changeColor(event) {
    setColor(event.target.style.color);
  }

  return (
    <>
      <div style={{ alignItems: 'center' }}>
        <div id="box" style={{ height: '50px', width: '50px', backgroundColor: colour }}></div>

        <div>
          <button id="red" onClick={changeColor} style={{ color: 'red' }}>Red</button>
          <button id="green" onClick={changeColor} style={{ color: 'green' }}>Green</button>
          <button id="yellow" onClick={changeColor} style={{ color: 'yellow' }}>Yellow</button>
        </div>
      </div>
    </>
  );
}

export default ColourChanger;
