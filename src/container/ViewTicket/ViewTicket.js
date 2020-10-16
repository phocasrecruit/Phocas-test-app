import { Button, CircularProgress } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Header } from "../../component/index";
import { organisationId } from "../../query/utils";
import { getBoard } from "../../store/Board/index";
import { deleteTicket } from "../../store/Ticket/index";
import "./viewTicket.scss";

const ViewTicket = props => {
  const boardId = localStorage.getItem("boardID");
  const history = useHistory();

  useEffect(() => {
    let data = {
      organisationId: organisationId,
      boardId: boardId
    };
    props.getBoard(data);
  }, [props]);

  const handleUpdate = id => {
    localStorage.setItem("ticketId", id);
    history.push("/updateTicket");
  };

  async function handleDelete(id) {
    let data = {
      organisationId: organisationId,
      ticketId: id
    };
    localStorage.setItem("ticketId", id);
    await props.deleteTicket(data);
    alert("Ticket Deleted");
  }

  const handleAdd = () => {
    history.push("/createTicket");
  };

  if (!props.board.hasOwnProperty("tickets")) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Header name="View Tickets" />
      <div className="create-ticket">
        <Button
          className="button"
          size="small"
          variant="outlined"
          color="primary"
          onClick={handleAdd}
        >
          ADD TICKET
        </Button>
      </div>

      {props.board.tickets.board.tickets.map(ticket => (
        <Card key={ticket.id} className="ticket-root">
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
          <div class="actions">
            <Button
              size="small"
              color="primary"
              variant="outlined"
              className="button"
              onClick={() => {
                handleUpdate(ticket.id);
              }}
            >
              UPDATE TICKET
            </Button>
            <Button
              className="button"
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => {
                handleDelete(ticket.id);
              }}
            >
              DELETE TICKET
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getBoard, deleteTicket }
)(ViewTicket);
