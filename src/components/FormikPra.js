import React from "react";
import { Formik, useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";

function FormikPra() {
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <FormLabel htmlFor="channel">Channel</FormLabel>
        <Input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        <Button as="button" variant="ghost" type="submit">
          Click to Submit
        </Button>
      </form>
    </div>
  );
}

export default FormikPra;
