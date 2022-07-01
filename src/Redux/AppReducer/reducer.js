import * as Types from "./actionTypes";
const initialState = {
  books: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Types.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: payload,
        isError: false,
        isLoading: false,
      };
    case Types.GET_BOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
