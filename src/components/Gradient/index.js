import React from 'react';

const Gradient = ({direction, firstColor, lastColor}) => {

  return <div id="gradient" style={{ background: `linear-gradient(${direction}deg,${firstColor},${lastColor})`, }}/>
};

export default Gradient;
