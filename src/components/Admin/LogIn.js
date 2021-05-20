import React from "react";
import {
  InputGroup,
  Button,
  InputRightElement,
  FormControl,
  FormLabel,
  Box,
  Input,
  Heading,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AdminContext = React.createContext();

function LogIn() {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(false);
  const handleClick = () => setShow(!show);
  let history = useHistory();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, actions) => {
    axios
      .post("http://localhost:8000/adminLogin", values)
      .then((res) => {
        console.log(res.data.auth);
        console.log(res.data.token);
        setAuth((auth) => res.data.auth);
        if (res.data.auth) {
          history.push("/admin/queries");
        }
        actions.setSubmitting(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box w="50%" bg="gray.50" m="60px" p={3} mx="auto" mt="30px">
      <Heading mb={10} color="maroon" textAlign="center">
        LogIn Hostel Manager
      </Heading>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => (
          <Form>
            <Field name="email">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...field} id="email" placeholder="email" />
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl mt={4}>
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
              mt={6}
              width="100%"
              colorScheme="linkedin"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
              {/* {auth && <Redirect />} */}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default LogIn;
