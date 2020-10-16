import { CREATE_BOARD, GET_BOARD_ACTION } from "./action-type";
import { PUT_BOARD, GET_BOARD } from "../../query/board";
import client from "../../graphql/apollo";

export const getBoard = reqData => {
  return async dispatch => {
    let { data } = await client.query({
      query: GET_BOARD,
      variables: reqData,
      fetchPolicy: "no-cache"
    });
    console.log("data", data);
    dispatch({ type: GET_BOARD_ACTION, payload: data });
  };
};

export const createBoard = reqData => {
  return async dispatch => {
    let { data } = await client.mutate({
      mutation: PUT_BOARD,
      variables: reqData
    });
    dispatch({ type: CREATE_BOARD, payload: data });
  };
};
