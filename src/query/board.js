import { gql } from "@apollo/client";

export const PUT_BOARD = gql`
  mutation putBoard($organisationId: ID!, $boardId: ID, $input: BoardInput!) {
    putBoard(
      organisationId: $organisationId
      boardId: $boardId
      input: $input
    ) {
      id
      name

      createdAt
      updatedAt
      tickets {
        name
        description
        status
      }
    }
  }
`;

export const GET_BOARD = gql`
  query board($organisationId: ID!, $boardId: ID!) {
    board(organisationId: $organisationId, boardId: $boardId) {
      id
      name

      createdAt
      updatedAt
      tickets {
        id
        name
        description
        status
      }
    }
  }
`;
