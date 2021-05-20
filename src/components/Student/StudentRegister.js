import React, { useState } from "react";
import { Box, Container, Heading, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

// fname,
//     lname,
//     mob_no,
//     dept,
//     year_of_study,
//     password,
//     email,

const SignupForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const initialValues = {
    fname: "",
    lname: "",
    mob_no: "",
    dept: "",
    year_of_study: "",
    email: "",
    password: "",
  };

  const onSubmit = (values, actions) => {
    axios
      .post(`http://localhost:8000/signup`, values)
      .then((response) => {
        console.log(response);
        actions.setSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(props) => (
        <Form>
          <Field name="fname">
            {({ field, form }) => (
              <FormControl>
                <FormLabel htmlFor="fname">First name</FormLabel>
                <Input {...field} id="fname" placeholder="first name" />
              </FormControl>
            )}
          </Field>
          <Field name="lname">
            {({ field, form }) => (
              <FormControl>
                <FormLabel htmlFor="lname">last name</FormLabel>
                <Input {...field} id="lname" placeholder="Last name" />
              </FormControl>
            )}
          </Field>
          <Field name="dept" as="select">
            {({ field, form }) => (
              <FormControl>
                <FormLabel htmlFor="dept">Enter Your Department</FormLabel>
                <Select placeholder="Department" {...field}>
                  <option value="CE">Civil Engineering</option>
                  <option value="COE">Computer Engineering</option>
                  <option value="IT">Information Technology</option>
                  <option value="SE">Software Engineering</option>
                </Select>
              </FormControl>
            )}
          </Field>
          <Field name="mob_no">
            {({ field, form }) => (
              <FormControl>
                <FormLabel htmlFor="mob_no">Mobile Number</FormLabel>
                <Input {...field} id="mob_no" placeholder="Mobile Number" />
              </FormControl>
            )}
          </Field>
          <Field name="year_of_study">
            {({ field, form }) => (
              <FormControl>
                <FormLabel htmlFor="year_of_study">Year of Study</FormLabel>
                <Input
                  {...field}
                  id="year_of_study"
                  placeholder="Year of Study"
                />
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }) => (
              <FormControl>
                <FormLabel htmlFor="email">Email Id</FormLabel>
                <Input {...field} id="email" placeholder="Email Id" />
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    {...field}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    id="password"
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

function StudentRegister() {
  return (
    <Container maxW="container.xl" centerContent>
      <Heading
        as="h1"
        size="3xl"
        p={5}
        mb="6"
        bgGradient="linear(to-r, red.300, blue.500)"
        isTruncated
        bgClip="text"
      >
        Registration Form
      </Heading>
      <Box shadow="2xl" rounded="md" boxSize="100%" padding="4">
        <SignupForm />
      </Box>
    </Container>
  );
}

export default StudentRegister;
