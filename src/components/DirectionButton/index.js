/* eslint-disable react/button-has-type */
import React from 'react';



const DirectionButton = ({toDirection,arrows, arrowDirection, directionId, textDirection}) => {

  

  return (
  <button 
  className="button" 
  id={directionId}
  onClick={()=>{
    arrowDirection(arrows);
    toDirection(directionId);
  }} 
  >
    {textDirection}
  </button>
  )
};


export default DirectionButton;
