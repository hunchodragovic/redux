import { BUY_CAKE } from "./actionTypes";

const initialState = {
  numberOfCakes: 10,
};
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // Keep other state properties (if any) intact
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state; // Add this line
  }
};

export default cakeReducer;
