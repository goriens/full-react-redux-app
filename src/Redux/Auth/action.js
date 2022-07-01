import * as Types from "./actionType";
import axios from "axios";

export const login = (payload) => (dispatch) => {
  dispatch({ type: Types.USER_LOGIN_REQUEST });
  return axios({
    method: "post",
    url: "https://reqres.in/api/login",
    data: payload,
  })
    .then((r) => dispatch({ type: Types.USER_LOGIN_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: Types.USER_LOGIN_FAILURE }));
};
