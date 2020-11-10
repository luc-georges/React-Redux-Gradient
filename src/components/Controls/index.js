/* eslint-disable react/button-has-type */
import React from 'react';
import { randomHexColor } from '../../utils';
import { randFirst, randLast } from '../../store/actions';
import { useSelector } from 'react-redux'


const Controls = () => {
  const direction = useSelector((state) => state.direction)

  if(direction == '90deg' ||direction =='45deg' ||direction =='135deg' ){
    return  <div className="buttons group">
      
    <button
      className="button"
      id="randFirst"
      onClick={() => {
        dispatch(randFirst(randomHexColor()));
      }}
    >
      Random First
    </button>
    <button className="button" 
    id="randAll"
    onClick={() => {
        dispatch(randFirst(randomHexColor()))
        dispatch(randLast(randomHexColor()))
    }}>
      Random All
    </button>
    <button className="button" 
    id="randLast"
    onClick={() => {
        dispatch(randLast(randomHexColor()))
    }}>
      Random Last
    </button>
  </div>;
    }else{
      return  <div className="buttons group">
      <button className="button" 
      id="randLast"
      onClick={() => {
          dispatch(randLast(randomHexColor()))
      }}>
        Random Last
      </button>
      
      <button className="button" 
      id="randAll"
      onClick={() => {
          dispatch(randFirst(randomHexColor()))
          dispatch(randLast(randomHexColor()))
      }}>
        Random All
      </button>
      <button
        className="button"
        id="randFirst"
        onClick={() => {
          dispatch(randFirst(randomHexColor()));
        }}
      >
        Random First
      </button>
    </div>;
    }

};
export default Controls;
