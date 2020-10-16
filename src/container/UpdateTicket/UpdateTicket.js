import { ErrorMessage } from "@hookform/error-message";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Header, InputField, Modal, SubmitButton } from "../../component/index";
import { organisationId } from "../../query/utils";
import {
  getSingleTicket,
  nullifyValue,
  updateTicket
} from "../../store/Ticket/index";
import "./updateTicket.scss";

const UpdateTicket = props => {
  const [isModalOpen, toggleModal] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [field, setField] = useState(false);
  const ticketId = localStorage.getItem("ticketId");
  const { handleSubmit, control, register, errors, setValue } = useForm({
    mode: "onBlur"
  });

  useEffect(() => {
    let reqData = {
      organisationId: organisationId,
      ticketId: ticketId
    };
    populateValues(reqData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function populateValues(reqData) {
    props.getSingleTicket(reqData);
    setField(true);
  }

  useEffect(() => {
    if (props.ticket.hasOwnProperty("singleTicket") && field) {
      let values = props.ticket.singleTicket.ticket;
      setValue("input.name", values.name);
      setValue("input.description", values.description);
      setValue("input.status", values.status);
      setField(false);
    }

    if (props.ticket.hasOwnProperty("singleTicket")) {
      if (props.ticket.singleTicket.hasOwnProperty("putTicket")) {
        toggleModal(true);
        setDialogMessage("updated Successfully");
        props.nullifyValue();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const handleModalClick = () => {
    alert("done");
    toggleModal(false);
    props.history.push("/viewTickets");
  };

  async function onSubmit(formValues) {
    formValues.organisationId = organisationId;
    formValues.boardId = localStorage.getItem("boardID");
    formValues.ticketId = props.ticket.singleTicket.ticket.id;
    formValues.input.visible = props.ticket.singleTicket.ticket.visible;
    props.updateTicket(formValues);
  }

  return (
    <div className="whole-create">
      <Header />
      <div className="container create-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography className="heading" variant="h3">
            {" "}
            Update Ticket
          </Typography>
          <div className="form-fields">
            <Row className="each-row">
              <Col>
                <Controller
                  as={InputField}
                  label={"Ticket Name"}
                  name="input.name"
                  rules={{ required: true }}
                  control={control}
                  ref={register}
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
                  ref={register}
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
                  as={InputField}
                  label={"Ticket Status"}
                  name="input.status"
                  ref={register}
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
  { getSingleTicket, updateTicket, nullifyValue }
)(UpdateTicket);
