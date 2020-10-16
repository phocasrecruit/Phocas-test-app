import {
  GET_TICKET,
  ADD_TICKET,
  UPDATE_TICKET,
  NULLIFY_VALUE,
  DELETE_TICKET_ACTION
} from "./action-type";

const initialState = {};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKET:
      return { ...state, singleTicket: action.payload };
    case UPDATE_TICKET:
      return { ...state, singleTicket: action.payload };
    case ADD_TICKET:
      return { ...state, addTicket: action.payload };
    case DELETE_TICKET_ACTION:
      return { ...state, deleteTicket: action.payload };
    case NULLIFY_VALUE:
      return { ...state, singleTicket: action.payload };

    default:
      return state;
  }
};
