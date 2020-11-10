import React from 'react';


const Colors = ({direction, firstColor, lastColor, arrow}) => {

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
