import { combineReducers } from "redux";

import { ticketReducer } from "./Ticket";
import { boardReducer } from "./Board";

export default combineReducers({
  ticket: ticketReducer,
  board: boardReducer
});
