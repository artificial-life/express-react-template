import {DONE} from '../constants/basic.js';

const intialState = {
  value: -1
};

export default function basicReducer(state = intialState, action) {
  switch (action.type) {
    case DONE:
      return {value: action.value};
    default:
      return state;
  }
}
