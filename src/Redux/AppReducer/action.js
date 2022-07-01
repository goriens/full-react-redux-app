import * as Types from "./actionTypes";
import axios from "axios";

export const getBooks = (params) => (dispatch) => {
  dispatch({ type: Types.GET_BOOKS_REQUEST });
  axios
    .get("http://localhost:8080/books", params)
    .then((r) => dispatch({ type: Types.GET_BOOKS_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: Types.GET_BOOKS_FAILURE }));
};
