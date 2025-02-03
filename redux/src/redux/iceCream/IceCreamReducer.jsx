import { BUY_ICECREAM } from "./actionTypes";

const initialState = {
  numberOfIceCreams: 15,
};
const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state, // Keep other state properties (if any) intact
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    default:
      return state; // Add this line
  }
};

export default IceCreamReducer;
