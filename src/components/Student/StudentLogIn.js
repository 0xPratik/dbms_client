import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  Heading,
  Center,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const LogInForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = (values) => {
    axios
      .post(`http://localhost:8000/login`, values)
      .then((res) => {
        console.log(res.data);
        setAuth((auth) => res.data.auth);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(props) => (
        <Form>
          <Field name="email">
            {({ field, form }) => (
              <FormControl>
                <FormLabel htmlFor="email">Email Id</FormLabel>
                <Input {...field} id="email" placeholder="E-mail" />
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
          <Center>
            <Button mt={4} colorScheme="teal" type="submit" w="100%">
              Submit
            </Button>
          </Center>
        </Form>
      )}
    </Formik>
  );
};

function StudentLogIn() {
  return (
    <Center>
      <Box w="30%" p="3" boxShadow="2xl" mt={5} borderColor="pink.900">
        <Center>
          <Heading color="blue.800" p="2" mb={2}>
            Log In
          </Heading>
        </Center>
        <Box mt="6">
          <Center>
            <Avatar
              size="2xl"
              name="Admin"
              src="https://picsum.photos/200/300"
            />
          </Center>
          <LogInForm />
        </Box>
      </Box>
    </Center>
  );
}

export default StudentLogIn;
