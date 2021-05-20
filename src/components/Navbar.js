import { Image, Flex, Spacer, Button } from "@chakra-ui/react";
import {
  Input,
  FormLabel,
  FormControl,
  useDisclosure,
  initialRef,
  finalRef,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "./assets/dtu_logo.png";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex background="blue.700" alignItems="center" py=".5rem">
        <Image boxSize="80px" ml="1rem" src={logo} alt="DTU logo" />
        <Spacer />
        <Link as="a" to="/student/register">
          <Box
            mr={3}
            py={3}
            px={4}
            bg="cyan.50"
            borderRadius="md"
            color="cyan.900"
          >
            Register
          </Box>
        </Link>
        <Link as="a" to="/student/login">
          <Box
            mr={5}
            py={3}
            px={4}
            bg="cyan.50"
            borderRadius="md"
            color="cyan.900"
          >
            LogIn
          </Box>
        </Link>
        <Link as="a" to="/student/hostels">
          <Box
            mr={5}
            py={3}
            px={4}
            bg="cyan.50"
            borderRadius="md"
            color="cyan.900"
          >
            See Hostels
          </Box>
        </Link>
        <Link as="a" to="/student/application">
          <Box
            mr={5}
            py={3}
            px={4}
            bg="cyan.50"
            borderRadius="md"
            color="cyan.900"
          >
            Apply for Hostel
          </Box>
        </Link>
        <Link as="a" to="/student/contact">
          <Box
            mr={5}
            py={3}
            px={4}
            bg="cyan.50"
            borderRadius="md"
            color="cyan.900"
          >
            Contact Hostel Manager
          </Box>
        </Link>
        <Link as="a" to="/student/info">
          <Box
            mr={5}
            py={3}
            px={4}
            bg="cyan.50"
            borderRadius="md"
            color="cyan.900"
          >
            Check
          </Box>
        </Link>
      </Flex>
    </>
  );
};

export default NavBar;
