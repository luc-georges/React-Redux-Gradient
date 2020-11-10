/* eslint-disable react/button-has-type */
// == Import npm
import React from 'react';

// == Import
import './styles.css';
import NbColors from '../NbColors';
import Controls from '../Controls';
import Colors from '../Colors';
import ColorsCSS from '../ColorsCSS';

import Gradient from '../Gradient';
import DirectionButton from '../DirectionButton';


const App = () => (
  <div className="app">
    <NbColors />

    <Controls />

    <Colors />
    
    <Gradient />

    <div className="buttons group">
      <DirectionButton textDirection='to right' directionId ='90deg'  />
      <DirectionButton textDirection='45deg' directionId ='45deg'   />
      <DirectionButton textDirection='135 deg' directionId ='135deg' />
      <DirectionButton textDirection='225 deg' directionId ='225deg' />
      <DirectionButton textDirection='315deg' directionId ='315deg'  />
      <DirectionButton textDirection='to left' directionId ='275deg' />
    </div>
    <ColorsCSS />
  </div>
);

// == Export
export default App;
