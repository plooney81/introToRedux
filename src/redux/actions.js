//? Adds more continuity, Instead of Using strings and comparing the values
//? We are saving the string to a const
export const ACTION_INCREMENT = "INCREMENT";
export const ACTION_DECREMENT = "DECREMENT";

//? Better way
export const increment = (num, account) => {
  return {
    type: ACTION_INCREMENT,
    payload: {
      amount: num,
      //! OBJECT PROPERTY SHORTHAND
      account
      // ^ account: account
    }
  }
}


export const decrement = (num, account) => {
  return {
    type: ACTION_DECREMENT,
    payload: {
      amount: num,
      account
      // ^ account: account
    }
  }
}

