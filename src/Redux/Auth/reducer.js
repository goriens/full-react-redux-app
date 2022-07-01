import * as Types from "./actionType";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    case Types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
      };
    default:
      return state;
  }
};
