import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  CreateBoard,
  CreateTicket,
  UpdateTicket,
  ViewTicket,
  ViewBoard
} from "../container/index";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CreateBoard} />
          <Route exact path="/createTicket" component={CreateTicket} />
          <Route exact path="/updateTicket" component={UpdateTicket} />
          <Route exact path="/viewTickets" component={ViewTicket} />
          <Route exact path="/viewBoard" component={ViewBoard} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
