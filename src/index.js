import {createStore} from 'redux';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
console.log('Starting banking app');

//! Initialize the default state
const defaultState = {
  balance: 0
}


//! Create two actions

//? First way
const actionIncrement = {
  type: "INCREMENT",
  payload: {
    ammount: 1
  }
}
const actionDecrement = {
  type: "DECREMENT",
  payload: {
    amount: 1
  }
}

//? Better way
const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: {
      amount: num
    }
  }
}


const decrement = (num) => {
  return {
    type: 'DECREMENT',
    payload: {
      amount: num
    }
  }
}

//! Create Reducer(s)
const accountReducer = (state=defaultState, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        balance: state.balance + action.payload.amount
      }
    case 'DECREMENT':
      return {
        balance: state.balance - action.payload.amount
      }
    default:
      return state;
  }
}

//! Create the store
const store = createStore(accountReducer);

store.subscribe(() => {
  console.log('SUP --> State UPdated')
  const state = store.getState();
  console.log(state)
})

window.store = store;
window.increment = increment;
window.decrement = decrement;
window.actionIncrement = actionIncrement;
window.actionDecrement = actionDecrement