import React from 'react';
import './style.css';
import mpa from './map.png';

function main() {
  return (
    <div>
      <h1>광복절 캘린더</h1>
      <div className="map">
        <img src={mpa} className='mapimg' />
      </div>
    </div>
  );
}

export default main;