import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Link, Tag } from "@chakra-ui/react";
import axios from "axios";

// const Mailto = ({ email, subject = "", body = "", children }) => {
//   let params = subject || body ? "?" : "";
//   if (subject) params += `subject=${encodeURIComponent(subject)}`;
//   if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

//   return (
//     <a href={`mailto:${email}${params}`} target="_blank">
//       {children}
//     </a>
//   );
// };

function Queries() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/queries`)
      .then((res) => {
        setQueries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(queries);
  return (
    <Box>
      {queries.map((query) => {
        const { email, message, subject, q_id } = query;
        return (
          <Box
            width="95vw"
            h="200px"
            bg="teal.50"
            boxShadow="2xl"
            mb={4}
            mx="auto"
            key={q_id}
            p={2}
            position="relative"
          >
            <Heading size="md" color="teal.900">
              {subject}
            </Heading>
            <Text color="teal.500" mt={2}>
              {message}
            </Text>
            <Box mt={3} pos="absolute" bottom="20px">
              <Tag variant="outline" size="lg" colorScheme="cyan">
                {email}
              </Tag>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Queries;
