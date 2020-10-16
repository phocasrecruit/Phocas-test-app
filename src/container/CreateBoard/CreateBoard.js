import { ErrorMessage } from "@hookform/error-message";
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Header, InputField, Modal, SubmitButton } from "../../component/index";
import { organisationId } from "../../query/utils";
import { createBoard } from "../../store/Board/index.js";
import "./createBoard.scss";

const CreateBoard = props => {
  const [isModalOpen, toggleModal] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const { handleSubmit, control, errors } = useForm({
    defaultValues: ""
  });

  useEffect(() => {
    if (props.board) {
      if (props.board.hasOwnProperty("board")) {
        if (props.board.board.hasOwnProperty("putBoard")) {
          localStorage.setItem("boardID", props.board.board.putBoard.id);
          setDialogMessage("Board Created Successfully");
          toggleModal(true);
        }
      }
    }
  }, [props]);

  const handleModalClick = () => {
    toggleModal(false);
    props.history.push("/viewBoard");
  };

  async function onSubmit(formValues) {
    console.log(formValues);
    formValues.organisationId = organisationId;
    await props.createBoard(formValues);
  }

  return (
    <div className="whole-create">
      <Header name="Create Board" />
      <div className="container create-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-fields">
            <Row className="each-row">
              <Col>
                <Controller
                  as={InputField}
                  label={"Board Name"}
                  name="input.name"
                  rules={{ required: true }}
                  control={control}
                  id={"outlined-full-width"}
                />
              </Col>
              <ErrorMessage
                errors={errors}
                name="blogName"
                message="Board Name is required"
              />
            </Row>
          </div>
          <Row className="each-row">
            <Col className="button">
              <Button
                color="primary"
                variant="contained"
                size="large"
                control={control}
                type="submit"
                label="Register"
              >
                Submit
              </Button>
            </Col>
          </Row>
          <div>
            <br />
          </div>
        </form>
      </div>
      <Modal
        isOpen={isModalOpen}
        dialogMessage={dialogMessage}
        onClick={handleModalClick}
      >
        <SubmitButton label="ok" className="modal-button">
          ok{" "}
        </SubmitButton>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { createBoard }
)(CreateBoard);
