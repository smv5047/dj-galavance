import React, { useState } from "react";
import { withFormik, Form, Field, yupToFormErrors } from "formik";
import { Button, FormGroup, Label, Input, FormText } from "reactstrap";
import * as yup from "yup";

function ContactForm() {
  //TODO onChange, onSubmit, States

  return (
    <div>
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
        <Input type="textarea" name="text" id="exampleText" />
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
      email: values.email || "John.Doe@gmail.com"
    };
  },

  validationSchema: yup.object().shape({
    first_name: yup.string(),
    last_name: yup.string()
    // email: yup.email()
  })
  // onSubmit
})(ContactForm);
