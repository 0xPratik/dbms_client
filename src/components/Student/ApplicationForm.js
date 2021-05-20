import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

function ApplicationForm() {
  const [hostels, setHostels] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/hostels`)
      .then((res) => {
        console.log(res.data);
        setHostels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const initialValues = {
    hostel_id: "",
    email: "",
    mob_no: "",
    message: "",
  };

  const onSubmit = (values, actions) => {
    axios
      .post(`http://localhost:8000/applications`, values)
      .then((response) => {
        console.log(response);
        actions.setSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box w="70%" bg="gray.50" m={2} p={3} mx="auto" mt="30px">
      <Heading mb={10} color="maroon">
        Application Form
      </Heading>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => (
          <Form>
            <Field name="hostel_id" as="select">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="hostel">Hostel Name</FormLabel>
                  <Select placeholder="Hostel" {...field}>
                    {hostels.map((h) => {
                      return (
                        <option value={h.hostel_id}>{h.hosel_name}</option>
                      );
                    })}
                  </Select>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...field} id="email" placeholder="email" />
                </FormControl>
              )}
            </Field>
            <Field name="mob_no">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="mob_no">Phone No</FormLabel>
                  <Input {...field} id="mob_no" placeholder="Enter Phone no" />
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea {...field} id="message" placeholder="Message" />
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="blue"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default ApplicationForm;
