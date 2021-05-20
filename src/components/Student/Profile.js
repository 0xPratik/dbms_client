import React, { useState, useEffect } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import axios from "axios";

function Profile() {
  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/8`)
      .then((res) => {
        console.log(res.data);
        setHostels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
      bg="gray.50"
      columns={{ sm: 2, md: 4 }}
      boxShadow="dark-lg"
      p="6"
      rounded="md"
    >
      <VStack spacing="8">
        <Text fontSize="4xl"></Text>
      </VStack>
    </Box>
  );
}

export default Profile;
