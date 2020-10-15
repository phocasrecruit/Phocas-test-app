import { useQuery } from "@apollo/client";
import { CircularProgress } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { Header } from "../../component/index";
import { GET_BOARD } from "../../query/board";
import "./viewTicket.scss";

const ViewTicket = props => {
  const [ticketData, setData] = useState("");
  let boardId = localStorage.getItem("boardID");
  let organisationId = "4f8de28a-3190-4f4c-81f7-d8f12c069af1";
  let { data } = useQuery(GET_BOARD, {
    variables: {
      organisationId: organisationId,
      boardId: boardId
    }
  });

  useEffect(() => {
    setData(data);
  }, [data]);

  if (!ticketData) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Header name="View Tickets" />
      {ticketData.board.tickets.map(ticket => (
        <Card className="ticket-root">
          <CardContent className="ticket-content">
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              className="ticket-title"
            >
              <b>{ticket.name}</b>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="ticket-description"
            >
              <b>{ticket.description}</b>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="ticket-description"
            >
              <b>Status</b> {ticket.status}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ViewTicket;
