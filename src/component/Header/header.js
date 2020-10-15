import AppBar from "@material-ui/core/AppBar";
import React from "react";
import "./header.scss";

export default function Header(props) {
  return (
    <div>
      <AppBar position="static">
        <div data-test="HeaderTitle" className="title">
          <h2>{props.name}</h2>
        </div>
      </AppBar>
    </div>
  );
}
