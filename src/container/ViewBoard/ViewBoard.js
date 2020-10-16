import { CircularProgress } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Header } from "../../component/index";
import { organisationId } from "../../query/utils";
import { getBoard } from "../../store/Board/index";
import "./viewBoard.scss";

const ViewBoard = props => {
  let boardId = localStorage.getItem("boardID");

  useEffect(() => {
    let data = {
      organisationId: organisationId,
      boardId: boardId
    };
    props.getBoard(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBoardClick = () => {
    props.history.push("/viewTickets");
  };

  if (!props.board.hasOwnProperty("tickets")) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Header name="View Board" />
      <Card className="root" onClick={handleBoardClick}>
        <CardContent className="content">
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            className="board-title"
          >
            <b>{props.board.tickets.board.name}</b>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className="description"
          >
            Number of tickets in the board :{" "}
            {props.board.tickets.board.tickets.length}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getBoard }
)(ViewBoard);
