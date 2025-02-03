import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actionTypes";

export const fetchUsersRequest = () => {
  return { type: FETCH_USERS_REQUEST };
};

export const fetchUsersSuccess = (users) => {
  return { type: FETCH_USERS_SUCCESS, payload: users };
};

export const fetchUsersFailure = (error) => {
  return { type: FETCH_USERS_FAILURE, payload: error };
};

// Fetch users function
export const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest()); // Set loading state to true
    axios
      .get("https://jsonplaceholder.typicode.com/users/2") // Fetch users from API
      .then((response) => {
        dispatch(fetchUsersSuccess([response.data.name])); // Dispatch success action
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message)); // Dispatch failure action
      });
  };
};
