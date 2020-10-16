import {
  GET_TICKET,
  ADD_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET_ACTION
} from "./action-type";
import {
  GET_SINGLE_TICKET,
  PUT_TICKET,
  DELETE_TICKET
} from "../../query/ticket";
import client from "../../graphql/apollo";

export const getSingleTicket = reqData => {
  return async dispatch => {
    let { data } = await client.query({
      query: GET_SINGLE_TICKET,
      variables: reqData
    });
    dispatch({ type: GET_TICKET, payload: data });
  };
};

export const updateTicket = reqData => {
  return async dispatch => {
    let { data } = await client.mutate({
      mutation: PUT_TICKET,
      variables: reqData
    });
    dispatch({ type: UPDATE_TICKET, payload: data });
  };
};

export const addTicket = reqData => {
  return async dispatch => {
    let { data } = await client.mutate({
      mutation: PUT_TICKET,
      variables: reqData
    });
    dispatch({ type: ADD_TICKET, payload: data });
  };
};

export const deleteTicket = reqData => {
  return async dispatch => {
    let { data } = await client.mutate({
      mutation: DELETE_TICKET,
      variables: reqData
    });
    dispatch({ type: DELETE_TICKET_ACTION, payload: data });
  };
};

export const nullifyValue = () => {
  return async dispatch => {
    let data = {};
    dispatch({ type: UPDATE_TICKET, payload: data });
  };
};
