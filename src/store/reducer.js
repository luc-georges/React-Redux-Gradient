
import { RAND_FIRST, RAND_LAST, TO_DIRECTION } from './actions';


const stateInitial = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};


const reducer = (state = stateInitial, action = {}) => {

  switch (action.type) {
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
