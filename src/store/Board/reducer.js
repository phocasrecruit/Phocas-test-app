import { CREATE_BOARD, GET_BOARD_ACTION } from "./action-type";

const initialState = {};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return { ...state, board: action.payload };

    case GET_BOARD_ACTION:
      return { ...state, tickets: action.payload };

    default:
      return state;
  }
};
