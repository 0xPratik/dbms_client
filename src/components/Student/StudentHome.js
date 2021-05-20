import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function StudentHome() {
  return (
    <Box w="100vw" h="100vh" bg="cyan.200" p={10}>
      <Heading>Welcome to Hostel Allotment System</Heading>
      <Text fontWeight="bold" fontSize="xl" mt={2} p={2}>
        Here, you can register yourself as a Student and Send a Application to
        the Hostel Office so that your application can be Reviewed after that
        you will be alloted Hostel Rooms.
      </Text>
      <Text>
        After the Allocation of Hostel Room you will either get an Email or you
        can see that here itself
      </Text>
    </Box>
  );
}

export default StudentHome;
