import { useState } from "react";
import { Heading } from "@chakra-ui/layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormikPra from "./components/FormikPra";
import HostelInfo from "./components/Student/Hostelnfo";
import SIndex from "./components/Student/SIndex";
import AIndex from "./components/Admin/AIndex";
import Home from "./components/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/admin">
        <AIndex />
      </Route>
      <Route path="/student">
        <SIndex />
      </Route>
    </Switch>
  );
}

export default App;
