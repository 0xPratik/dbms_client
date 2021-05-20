import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

function ContactForm() {
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
    subject: "",
    message: "",
  };

  const onSubmit = (values, actions) => {
    console.log("Theses are the Values Before submission", values);
    axios
      .post(`http://localhost:8000/queries`, values)
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
        Contact Form
      </Heading>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => (
          <Form>
            <Field name="hostel_id" as="select">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="hostel_id">Hostel Name</FormLabel>
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
            <Field name="subject">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <Input {...field} id="subject" placeholder="Subject" />
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

export default ContactForm;
