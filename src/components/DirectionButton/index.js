/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch } from 'react-redux';
import { toDirection, arrowDirection } from '../../store/actions';


const DirectionButton = (props) => {
  const dispatch = useDispatch();
  return (
  <button 
  className="button" 
  id={props.directionId}
  onClick={()=>{
      dispatch(toDirection(props.directionId))
      dispatch(arrowDirection(props.arrow))
  }} 
  >
    {props.textDirection}
  </button>
  )
};


export default DirectionButton;
