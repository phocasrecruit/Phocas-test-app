import { gql, useMutation } from "@apollo/client";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { Header, InputField, Modal, SubmitButton } from "../../component/index";
import "./createTicket.scss";
import { PUT_TICKET } from "../../query/ticket";

const CreateTicket = props => {
  const [isModalOpen, toggleModal] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [data, setData] = useState({});

  const [createBoard] = useMutation(PUT_TICKET);

  const { handleSubmit, control, register, errors } = useForm({
    defaultValues: ""
  });

  useEffect(() => {
    if (data) {
      if (data.hasOwnProperty("putTicket")) {
        if (data.putTicket.id) {
          setDialogMessage("Ticket Created Successfully");
          toggleModal(true);
        }
      }
    }
  }, [data]);

  const handleModalClick = () => {
    alert("done");
    toggleModal(false);
    props.history.push("/viewTickets");
  };

  async function onSubmit(formValues) {
    console.log(formValues);
    let boardId = localStorage.getItem("boardID");
    formValues.organisationId = "4f8de28a-3190-4f4c-81f7-d8f12c069af1";
    formValues.boardId = boardId;
    formValues.input.visible = true;
    const { data } = await createBoard({
      variables: formValues
    });
    setData(data);
  }

  return (
    <div className="whole-create">
      <Header />
      <div className="container create-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography className="heading" variant="h3">
            {" "}
            Create Board
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
                  as={InputField}
                  label={"Ticket Status"}
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

export default CreateTicket;
