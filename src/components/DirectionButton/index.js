/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch } from 'react-redux';
import { toDirection } from '../../store/actions';


const DirectionButton = (props) => {
  const dispatch = useDispatch();
  return (
  <button 
  className="button" 
  id={props.directionId}
  onClick={()=>{
      dispatch(toDirection(props.directionId))
  }} 
  >
    {props.textDirection}
  </button>
  )
};


export default DirectionButton;
