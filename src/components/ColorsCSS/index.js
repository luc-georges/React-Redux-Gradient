import React from 'react';
import './style.scss'


const ColorsCSS = ({direction, firstColor, lastColor}) => {
 const myStyle = {
                    background: `linear-gradient(${direction},${firstColor},${lastColor})`
                }

  return <div className='gradient'> <span style={myStyle} className='gradient-text'>background: linear-gradient( {direction} , {firstColor} , {lastColor} )</span></div>
  }
;

export default ColorsCSS;







