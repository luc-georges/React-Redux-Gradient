import React from 'react';
import { useSelector } from 'react-redux'
import './style.scss'


const ColorsCSS = () => {
  const direction = useSelector((state) => state.direction)
  const firstColor = useSelector((state) => state.firstColor)
  const lastColor = useSelector((state) => state.lastColor)
 const myStyle = {
                    background: `linear-gradient(${direction},${firstColor},${lastColor})`
                }

  return <div className='gradient'> <span style={myStyle} className='gradient-text'>background: linear-gradient( {direction} , {firstColor} , {lastColor} )</span></div>
  }
;

export default ColorsCSS;







