import React, { useState } from "react";
import { withFormik, Form, Field, yupToFormErrors } from "formik";
import { Button, FormGroup, Label, Input, FormText } from "reactstrap";
import * as yup from "yup";
import emailjs from "emailjs-com";

function sendEmail(event) {
  emailjs
    .send(
      "default_service",
      "contact_form",
      event,
      "user_vIIopcCRB96XoW3SlCx8P"
    )
    .then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      }
    );
}

function ContactForm() {
  //TODO onChange, onSubmit, States

  return (
    <div className="form-container">
      <Form>
        <Field type="text" name="first_name" placeholder="John" />
        <Field type="text" name="last_name" placeholder="Doe" />
        <Field type="email" name="email" placeholder="John.Doe@gmail.com" />
        <Field component="select" name="event_type">
          <option value="" disabled>
            Select Event Type:
          </option>
          <option value="wedding">Wedding</option>
          <option value="corporate_event">Corporate Event</option>
          <option value="private_event">Private Event</option>
          <option value="club_or_bar">Club or Bar</option>
          <option value="other">Other</option>
        </Field>
        <FormText color="muted">Please enter any event details below.</FormText>
        <Input type="textarea" name="event_details" id="exampleText" />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: values => {
    return {
      first_name: values.first_name || "John",
      last_name: values.last_name || "Doe",
      email: values.email || "John.Doe@gmail.com",
      event_type: values.event_type || "Wedding",
      event_details: values.event_details || "N/A"
    };
  },

  validationSchema: yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup
      .string()
      .email()
      .required(),
    event_type: yup.string().required(),
    event_details: yup.string().required()
  }),
  handleSubmit: (values, { setStatus }) => {
    sendEmail(values);
  }
})(ContactForm);
