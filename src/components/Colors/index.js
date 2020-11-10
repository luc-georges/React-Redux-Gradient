import React from 'react';
import { useSelector } from 'react-redux'

const Colors = (props) => {
  const direction = useSelector((state) => state.direction)
  const firstColor = useSelector((state) => state.firstColor)
  const lastColor = useSelector((state) => state.lastColor)
  let arrow = ''

  if(direction === '90deg'){
  arrow = '→'
  }
  if(direction === '45deg'){
    arrow = `↗`
  }
  if(direction === '135deg'){
    arrow = '↘'
  }
  if(direction === '225deg'){
    arrow = '↙'
  } 
  if(direction === '275deg'){
    arrow = '←'
  } 
  if(direction === '315deg'){
    arrow = '↖'
  }

  if(direction == '90deg' ||direction =='45deg' ||direction =='135deg' ){
    return <div id="colors">
      <span style={{ color: `${firstColor}` }}>{firstColor}</span>{arrow}
      <span style={{ color: `${lastColor}` }}>{lastColor}</span>
    </div>;
    }else{
      return <div id="colors">
      <span style={{ color: `${lastColor}` }}>{lastColor}</span>{arrow}
      <span style={{ color: `${firstColor}` }}>{firstColor}</span>
    </div>;
    }
  ;

  }

export default Colors;
