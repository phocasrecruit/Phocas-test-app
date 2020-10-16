import { ErrorMessage } from "@hookform/error-message";
import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Header, InputField, Modal, SubmitButton } from "../../component/index";
import { addTicket } from "../../store/Ticket/index";
import "./createTicket.scss";

const CreateTicket = props => {
  const [isModalOpen, toggleModal] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [field, setField] = useState(false);
  const history = useHistory();

  const { handleSubmit, control, errors } = useForm({
    defaultValues: ""
  });

  useEffect(() => {
    if (props.ticket) {
      if (props.ticket.hasOwnProperty("addTicket") && field) {
        if (props.ticket.addTicket.hasOwnProperty("putTicket")) {
          setDialogMessage("Ticket Created Successfully");
          toggleModal(true);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const handleModalClick = () => {
    toggleModal(false);
    history.push("/viewTickets");
  };

  async function onSubmit(formValues) {
    console.log(formValues);
    let boardId = localStorage.getItem("boardID");
    formValues.organisationId = "4f8de28a-3190-4f4c-81f7-d8f12c069af1";
    formValues.boardId = boardId;
    formValues.input.visible = true;
    props.addTicket(formValues);
    setField(true);
  }

  return (
    <div className="whole-create">
      <Header name="Create Ticket" />
      <div className="container create-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-fields">
            <Row className="each-row">
              <Col>
                <Controller
                  as={InputField}
                  label={"Ticket Name"}
                  name="input.name"
                  rules={{ required: true }}
                  control={control}
                  id={"outlined-full-width"}
                />
              </Col>
              <ErrorMessage
                errors={errors}
                name="input.name"
                message="Ticket Name is required"
              />
            </Row>
            <Row className="each-row">
              <Col>
                <Controller
                  as={InputField}
                  label={"Ticket Description"}
                  name="input.description"
                  rules={{ required: true }}
                  control={control}
                  id={"outlined-full-width"}
                />
              </Col>
              <ErrorMessage
                errors={errors}
                name="input.description"
                message="Ticket Description is required"
              />
            </Row>
            <Row className="each-row">
              <Col>
                <Controller
                  as={
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="status"
                      label={"Ticket Status"}
                      id="select"
                      value="TODO"
                      select
                    >
                      <MenuItem value="TODO">TODO</MenuItem>
                      <MenuItem value="DONE">DONE</MenuItem>
                    </TextField>
                  }
                  name="input.status"
                  rules={{ required: true }}
                  control={control}
                  id={"outlined-full-width"}
                />
              </Col>
              <ErrorMessage
                errors={errors}
                name="input.status"
                message="Ticket Status is required"
              />
            </Row>
          </div>
          <div className="button">
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
          </div>

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
  { addTicket }
)(CreateTicket);
