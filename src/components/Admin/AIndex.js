import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import LogIn from "./LogIn";
import AlloteRooms from "./AlloteRooms";
import Queries from "./Queries";
import { Switch, Route } from "react-router-dom";
import ANavBar from "./ANavbar";

function AIndex() {
  const getToken = () => {
    console.log("This will have the Token");
  };
  return (
    <Box>
      <ANavBar />
      <Switch>
        <Route exact path="/admin/">
          <LogIn />
        </Route>
        <Route exact path="/admin/allot">
          <AlloteRooms />
        </Route>
        <Route exact path="/admin/queries">
          <Queries />
        </Route>
      </Switch>
    </Box>
  );
}

export default AIndex;
