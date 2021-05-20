import React from "react";
import NavBar from "../Navbar";
import { Switch, Route } from "react-router-dom";
import {} from "@chakra-ui/react";
import StudentRegister from "./StudentRegister";
import StudentLogIn from "./StudentLogIn";
import StudentHome from "./StudentHome";
import HosteInfo from "./Hostelnfo";
import ContactForm from "./ContactForm";
import ApplicationForm from "./ApplicationForm";
import StudentInfo from "./StudentInfo";

function SIndex() {
  return (
    <box>
      <NavBar />
      <Switch>
        <Route exact path="/student/">
          <StudentHome />
        </Route>
        <Route exact path="/student/register">
          <StudentRegister />
        </Route>
        <Route exact path="/student/login">
          <StudentLogIn />
        </Route>
        <Route exact path="/student/hostels">
          <HosteInfo />
        </Route>
        <Route exact path="/student/contact">
          <ContactForm />
        </Route>
        <Route exact path="/student/application">
          <ApplicationForm />
        </Route>
        <Route exact path="/student/info">
          <StudentInfo />
        </Route>
      </Switch>
    </box>
  );
}

export default SIndex;
