import React, { useState } from "react";
import { withFormik, Form, Field, yupToFormErrors } from "formik";
import * as yup from "yup";

function ContactForm() {
  //TODO onChange, onSubmit, States

  return (
    <div>
      <Form>
        <Field type="text" name="first_name" placeholder="John" />
        <Field type="text" name="last_name" placeholder="Doe" />
        <Field type="email" name="email" placeholder="John.Doe@gmail.com" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
//TODO Update form
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
})(ContactForm);
