import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MsalProvider } from "@azure/msal-react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Home from "./Home";
import Login from "./Login";
import Callback from "./Callback";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <AuthenticatedTemplate>
        <Router>
          <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<Callback />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="about" element={<About />} /> */}
          </Routes>
        </Router>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
    </React.Fragment>
      

  );
}

export default App;
