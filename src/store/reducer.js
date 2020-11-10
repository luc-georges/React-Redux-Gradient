
import { RAND_FIRST, RAND_LAST, TO_DIRECTION,ARROW_DIRECTION } from './actions';


const stateInitial = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  arrow:'→',
  nbColors: 0,
};


const reducer = (state = stateInitial, action = {}) => {

  switch (action.type) {
    case ARROW_DIRECTION:
      return {
        ...state,
        arrow: action.value
      };
    case TO_DIRECTION:
      return {
        ...state,
        direction: action.value,
      };
    case RAND_FIRST:
      return {
        ...state,
        firstColor: action.color,
        nbColors: state.nbColors + 1,
      };
    case RAND_LAST:
      return {
        ...state,
        lastColor: action.color,
        nbColors: state.nbColors + 1,
      };

    default:
      return state;
  }
};

export default reducer;
