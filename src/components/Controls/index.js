/* eslint-disable react/button-has-type */
import React from 'react';


const Controls = ({randFirst, randLast, direction}) => {

  if(direction <= 135 ){
    return  <div className="buttons group">
      
    <button
      className="button"
      id="randFirst"
      onClick={() => {
        randFirst();
      }}
    >
      Random First
    </button>
    <button className="button" 
    id="randAll"
    onClick={() => {
        randFirst();
       randLast();
    }}>
      Random All
    </button>
    <button className="button" 
    id="randLast"
    onClick={() => {
       randLast();
    }}>
      Random Last
    </button>
  </div>;
    }else{
      return  <div className="buttons group">
      <button className="button" 
      id="randLast"
      onClick={() => {
         randLast();
      }}>
        Random Last
      </button>
      
      <button className="button" 
      id="randAll"
      onClick={() => {
          randFirst();
         randLast();
      }}>
        Random All
      </button>
      <button
        className="button"
        id="randFirst"
        onClick={() => {
          randFirst();
        }}
      >
        Random First
      </button>
    </div>;
    }

};
export default Controls;
