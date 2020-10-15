import { gql, useMutation, useQuery } from "@apollo/client";
import { useApolloClient } from "@apollo/client";
import { CircularProgress } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { GET_BOARD } from "../../query/board";
import { Header } from "../../component/index";
import "./viewBoard.scss";
const ViewBoard = props => {
  const [boardData, setData] = useState("");
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

  const handleBoardClick = () => {
    props.history.push("/viewTickets");
  };

  if (!data) {
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
            <b>{data.board.name}</b>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className="description"
          >
            Number of tickets in the board : {data.board.tickets.length}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewBoard;
