import React from "react";
import { Flex, Image, Spacer, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/dtu_logo.png";

function ANavbar() {
  return (
    <Flex
      flexDirection="row"
      bg="darkkhaki"
      color="whiteAlpha.100"
      boxShadow="xl"
      p="4"
      alignItems="center"
      mb={2}
    >
      <Link as="a" to="/admin">
        <Image boxSize="80px" ml="1rem" src={logo} alt="DTU logo" />
      </Link>
      <Spacer />
      <Link as="a" to="/admin/">
        <Box
          mr={3}
          py={3}
          px={4}
          bg="cyan.50"
          borderRadius="md"
          color="cyan.900"
        >
          Home
        </Box>
      </Link>
      <Link as="a" to="/admin/allot">
        <Box
          mr={3}
          py={3}
          px={4}
          bg="cyan.50"
          borderRadius="md"
          color="cyan.900"
        >
          Allocate Rooms
        </Box>
      </Link>
      <Link as="a" to="/admin/queries">
        <Box
          mr={3}
          py={3}
          px={4}
          bg="cyan.50"
          borderRadius="md"
          color="cyan.900"
        >
          Queries
        </Box>
      </Link>
    </Flex>
  );
}

export default ANavbar;
