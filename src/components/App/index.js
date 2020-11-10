/* eslint-disable react/button-has-type */
// == Import npm
import React from 'react';

// == Import
import './styles.css';
import NbColors from '../../container/NbColors';
import Controls from '../../container/Controls';
import Colors from '../../container/Colors';
import ColorsCSS from '../ColorsCSS';

import Gradient from '../../container/Gradient';
import DirectionButton from '../DirectionButton';


const App = () => (
  <div className="app">
    <NbColors />

    <Controls />

    <Colors />
    
    <Gradient />

    <div className="buttons group">
      <DirectionButton textDirection='to right' directionId ='90deg'  arrow='→'  />
      <DirectionButton textDirection='45deg' directionId ='45deg'  arrow='↗' />
      <DirectionButton textDirection='135 deg' directionId ='135deg' arrow='↘' />
      <DirectionButton textDirection='225 deg' directionId ='225deg' arrow='↙' />
      <DirectionButton textDirection='315deg' directionId ='315deg' arrow='↖'  />
      <DirectionButton textDirection='to left' directionId ='275deg' arrow='←' />
    </div>
    <ColorsCSS />
  </div>
);

// == Export
export default App;
