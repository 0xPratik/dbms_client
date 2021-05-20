import React from "react";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import student from "./assets/students.jpg";

function Home() {
  return (
    <Box d="flex" justifyItems="center" alignItems="center" w="100vw" h="100vh">
      <Box
        w="50vw"
        h="100vh"
        bgImage={student}
        bg="red.100"
        flexDir="column"
        bgPosition="center"
        bgRepeat="no-repeat"
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="lg" color="red.900" fontWeight="bold">
          If you are a Student Click Below
        </Text>
        <Heading
          as={Link}
          size="4xl"
          color="red.400"
          to="/student"
          _hover={{ color: "red.800" }}
        >
          Student
        </Heading>
      </Box>
      <Box
        w="50vw"
        h="100vh"
        bg="yellow.100"
        d="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        role="group"
      >
        <Text fontSize="lg" color="yellow.900" fontWeight="bold">
          If you are a Admin Click Below
        </Text>
        <Heading
          as={Link}
          to="/admin"
          size="4xl"
          color="yellow.400"
          _hover={{ color: "yellow.800" }}
        >
          Admin
        </Heading>
      </Box>
    </Box>
  );
}

export default Home;
