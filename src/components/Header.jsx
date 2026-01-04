import React from 'react';
import { GridScan } from './GridScan';

function Header() {
  return (
    <header>
      <div id='gridContainer'>
        <GridScan
          sensitivity={0.1}
          lineThickness={0.5}
          linesColor='#392e4e'
          gridScale={0.1}
          scanColor='#1bd38c'
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          lineJitter={0}
          scanDirection='backward'
          scanDuration={5}
        />
        <div id='headerTitle'>
          <h1>Javier Leal</h1>
          <h3>Web Developer</h3>
          <p>
            Welcome to my portfolio! Explore my projects and skills in web
            development.
          </p>
        </div>
      </div>
    </header>
  );
}
export default Header;
