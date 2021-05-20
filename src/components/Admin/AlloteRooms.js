import React, { useEffect, useState } from "react";
import { Box, Text, VStack, Button, Heading, Flex } from "@chakra-ui/react";
import axios from "axios";

const Applicant = ({ app_id, email, hostel_id, message, mob_no }) => {
  const [alloted, isAlloted] = useState(false);
  const handleClick = (e) => {
    axios
      .post("http://localhost:8000/createrooms", { hostel_id, phone: mob_no })
      .then((response) => {
        console.log(response);
        isAlloted(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Flex
      w="95%"
      h="100px"
      bg="purple.100"
      p={4}
      alignItems="center"
      justifyContent="space-between"
      boxShadow="lg"
    >
      <Box fontWeight="bold" fontSize="lg" color="purple.800" p={2}>
        {app_id}
      </Box>
      <Flex direction="column" alignItems="flexStart" p={2}>
        <Text size="md" color="purple.600">
          {email}
        </Text>
        <Text size="md" color="purple.700">
          {mob_no}
        </Text>
        <Text color="purple.900" fontWeight="bold">
          {message}
        </Text>
      </Flex>
      <Button variant="ghost" color="pink.600" size="lg" onClick={handleClick}>
        {isAlloted ? <span>Allot</span> : <span>Alloted</span>}
      </Button>
    </Flex>
  );
};

function AlloteRooms() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/applications")
      .then((res) => {
        console.log(res.data);
        setApplications(res.data);
      })
      .catch((err) => console.log(err));
  }, [applications]);
  return (
    <VStack spacing={5}>
      {applications.map((application) => {
        return <Applicant {...application} />;
      })}
    </VStack>
  );
}

export default AlloteRooms;
