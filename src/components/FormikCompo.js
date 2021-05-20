import React from 'react'
import {Formik,Form,Field} from "formik"

function FormikCompo() {
    const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  console.log(formik.values);
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Field
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Field
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <FormLabel htmlFor="channel">Channel</FormLabel>
        <Field
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        <Button as="button" variant="ghost" type="submit">
          Click to Submit
        </Button>
      </Form>
    </Formik>
  );

export default FormikCompo
