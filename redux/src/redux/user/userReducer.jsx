import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { loading: false, data: action.payload, error: "" };
    case FETCH_USERS_FAILURE:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
