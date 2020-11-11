import { ACTION_INCREMENT, ACTION_DECREMENT } from './actions';

//! Initialize the default state
const defaultState = {
    checking: 100,
    savings: 100
  }

//   Math.round(parseFloat(newAmount * 100)) / 100 ;

//! Create Reducer(s)
export const accountReducer = (state=defaultState, action) => {

    switch(action.type){
      case ACTION_INCREMENT:
        return {
          //? Put everything that was on state onto this object, and then override anything if you need too.
          ...state,
          [action.payload.account]: Math.round(parseFloat((state[action.payload.account] + action.payload.amount)*100))/100
        }
      case ACTION_DECREMENT:
        return {
          ...state,
          [action.payload.account]: Math.round(parseFloat((state[action.payload.account] - action.payload.amount)*100))/100
        }
      default:
        return state;
    }
}