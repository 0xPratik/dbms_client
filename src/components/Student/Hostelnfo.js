import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading, Box, Text, Flex } from "@chakra-ui/react";

function HosteInfo() {
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
  return (
    <Box>
      <Box>
        <Heading p={5} color="cadetblue">
          Hostels
        </Heading>
      </Box>
      <Flex wrap="wrap">
        {hostels.map((h) => {
          return (
            <Box
              key={h.hostel_id}
              h="200px"
              boxShadow="lg"
              p={5}
              m={2}
              borderRadius="md"
              _hover={{
                color: "tomato",
                fontWeight: "semibold",
                cursor: "pointer",
              }}
            >
              <Heading size="md" color="blue.900">
                {h.hosel_name}
              </Heading>
              <Text fontWeight="bold">
                Current No of Rooms : {h.no_of_rooms}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

export default HosteInfo;
