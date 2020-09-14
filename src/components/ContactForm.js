import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import { Jumbotron, Button, Label, Input, FormText } from "reactstrap";
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
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

function ContactForm() {
  //TODO onChange, onSubmit, States
  const [submitted, isSubmitted] = useState(false);

  return (
    <div className="form-container">
      <Jumbotron className="contact-form">
        {submitted ? (
          <div className="thankyou">
            <h2>
              Thank you! I will be reaching out to you in the next 24 hours with
              more details.
            </h2>
          </div>
        ) : (
          <Form onSubmit={() => isSubmitted(!submitted)}>
            <Label className="first-label">First Name</Label>
            <Field type="text" name="first_name" placeholder="John" />

            <Label>
              Last Name
              <Field type="text" name="last_name" placeholder="Doe" />
            </Label>
            <Label>
              Email
              <Field
                type="email"
                name="email"
                placeholder="John.Doe@gmail.com"
              />
            </Label>
            <Label>Event Type</Label>
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

            <FormText>Please enter any event details below:</FormText>
            <Input type="textarea" name="event_details" id="exampleText" />
            <Button type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
        )}
      </Jumbotron>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: (values) => {
    return {
      first_name: values.first_name || "John",
      last_name: values.last_name || "Doe",
      email: values.email || "John.Doe@gmail.com",
      event_type: values.event_type || "Wedding",
      event_details: values.event_details || "N/A",
    };
  },

  validationSchema: yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    event_type: yup.string().required(),
    event_details: yup.string().required(),
  }),
  handleSubmit: (values, { setStatus }) => {
    sendEmail(values);
  },
})(ContactForm);
