import React from 'react';
import './style.scss'


const ColorsCSS = ({direction, firstColor, lastColor}) => {
  console.log(direction)

 const myStyle = {
                    background: `linear-gradient(${direction}deg,${firstColor},${lastColor})`
                }
                console.log(direction)
  return <div className='gradient'> <span style={myStyle} className='gradient-text'>background: linear-gradient( {direction}deg , {firstColor} , {lastColor} )</span></div>
  }
;

export default ColorsCSS;







