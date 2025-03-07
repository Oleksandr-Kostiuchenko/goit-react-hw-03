import style from "./ContactForm.module.css";

import { nanoid } from "nanoid";
import * as Yup from "yup";
import "yup-phone-lite";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min. 3 symbols")
    .max(50, "Max 50 symbols")
    .required("Required"),
  number: Yup.string()
    .phone("", "Please enter a valid phone number")
    .required("A phone number is required"),
});

const ContactForm = ({ onAdd }) => {
  const onFormSubmit = (formData, actions) => {
    onAdd({
      ...formData,
      id: `${nanoid(16)}`,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={onFormSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor="">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage
            className={style.errorMessage}
            name="name"
            component="span"
          />
        </div>

        <div>
          <label htmlFor="">Number</label>
          <Field type="text" name="number" />
          <ErrorMessage
            className={style.errorMessage}
            name="number"
            component="span"
          />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
