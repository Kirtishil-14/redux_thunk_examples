import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "../constants/userConstants";

export const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { loading: true, users: [] };
    case GET_USERS_SUCCESS:
      return { loading: false, users: action.payload };
    case GET_USERS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
