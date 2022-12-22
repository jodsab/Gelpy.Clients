import UsersService from "../../../Api/users";
import { setUserInfo } from "../actions/authActions";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCESS,
  SET_USER_INFO,
} from "../types";

export const initialState = {
  loading: false,
  currentUser: {},
  error: null,
};
//Thunk functions

export const setUserInfoWithCredentials = (data, id) => {
  if (id) {
    return async (dispatch) => {
      const response = await UsersService.updateUserData(data, id);
      dispatch(setUserInfo(response?.token));
      localStorage.setItem("authTokenGelpy", response?.token);
    };
  }
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCESS: {
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: {},
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    case SET_USER_INFO:
      return {
        ...state,
        loading: false,
        currentUser: { token: action.payload },
      };
    default:
      return state;
  }
}
