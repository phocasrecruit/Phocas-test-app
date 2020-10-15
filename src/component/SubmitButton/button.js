import React from "react";
import { Button } from "@material-ui/core";
import "./button.scss";

const SubmitButton = props => {
  return (
    <Button
      className="button"
      color="primary"
      variant="contained"
      size="large"
      type={props.type}
      onClick={props.onClick}
    >
      {" "}
      {props.label}{" "}
    </Button>
  );
};
export default SubmitButton;
