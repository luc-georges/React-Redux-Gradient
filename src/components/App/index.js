/* eslint-disable react/button-has-type */
// == Import npm
import React from 'react';

// == Import
import './styles.css';
import NbColors from '../../container/NbColors';
import Controls from '../../container/Controls';
import Colors from '../../container/Colors';
import ColorsCSS from '../../container/ColorsCSS';

import Gradient from '../../container/Gradient';
import DirectionButton from '../../container/DirectionButton';


const App = () => (
  <div className="app">
    <NbColors />

    <Controls />

    <Colors />
    
    <Gradient />

    <div className="buttons group">
      <DirectionButton textDirection='to right' directionId ='90deg'  arrows='→'  />
      <DirectionButton textDirection='45deg' directionId ='45deg'  arrows='↗' />
      <DirectionButton textDirection='135 deg' directionId ='135deg' arrows='↘' />
      <DirectionButton textDirection='225 deg' directionId ='225deg' arrows='↙' />
      <DirectionButton textDirection='315deg' directionId ='315deg' arrows='↖'  />
      <DirectionButton textDirection='to left' directionId ='275deg' arrows='←' />
    </div>
    <ColorsCSS />
  </div>
);

// == Export
export default App;
