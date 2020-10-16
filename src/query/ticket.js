import { gql } from "@apollo/client";

export const GET_SINGLE_TICKET = gql`
  query ticket($organisationId: ID!, $ticketId: ID!) {
    ticket(organisationId: $organisationId, ticketId: $ticketId) {
      id
      name
      description
      status
      visible
      board {
        name
      }
    }
  }
`;

export const PUT_TICKET = gql`
  mutation putTicket(
    $organisationId: ID!
    $boardId: ID!
    $ticketId: ID
    $input: TicketInput!
  ) {
    putTicket(
      organisationId: $organisationId
      boardId: $boardId
      ticketId: $ticketId
      input: $input
    ) {
      id
      name
      description
      status
      visible
    }
  }
`;

export const DELETE_TICKET = gql`
  mutation deleteTicket($organisationId: ID!, $ticketId: ID!) {
    deleteTicket(organisationId: $organisationId, ticketId: $ticketId) {
      id
      name
      description
      status
      visible
    }
  }
`;
