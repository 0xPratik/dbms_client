import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

function StudentInfo() {
  const [info, setInfo] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [hostels, setHostels] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/hostels/${info.hostel_id}`)
      .then((res) => {
        console.log(res.data.hosel_name);
        setHostels(res.data.hosel_name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [info]);
  return (
    <Box w="100vw" h="80vh" bg="green.50" p={4}>
      <Formik
        initialValues={{ mob_no: "" }}
        onSubmit={(values, actions) => {
          console.log(values.mob_no);
          axios
            .get(`http://localhost:8000/studentInfo/${values.mob_no}`)
            .then((res) => {
              setInfo(res.data[0]);
              setisLoading(true);
              actions.setSubmitting(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {(props) => (
          <Form>
            <Field name="mob_no">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="mob_no">Phone Number</FormLabel>
                  <Input {...field} id="mob_no" placeholder="phone No" />
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
      <Box bg="teal.50" w="100vw" p={5}>
        {isLoading && (
          <Box>
            <Text color="teal.800" fontSize="2xl">
              Student Name {info.fname} {info.lname}
            </Text>
            <Text color="teal.800" fontSize="2xl">
              DEPARTMENT: <Text fontWeight="bold"> {info.dept}</Text>
            </Text>
            <Text color="teal.900" fontSize="2xl">
              Your Hostel Name is: <Text fontWeight="bold"> {hostels}</Text>
            </Text>
            <Text color="teal.900" fontSize="2xl">
              Your Room No: <Text fontWeight="bold"> {info.room_id}</Text>
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default StudentInfo;
