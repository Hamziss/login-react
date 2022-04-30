import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Signin } from "../Signin";
import { Signup } from "../Signup";
import { Dashboard } from "../Home";
import { Errorpage } from "../Errorpage";
import { Navbar } from "../../components/Navbar";
export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route
          path='/signin'
          element={
            <>
              <Signin />
            </>
          }
        ></Route>
        <Route
          path='/signup'
          element={
            <>
              <Signup />
            </>
          }
        ></Route>

        <Route path='*' element={<Errorpage />}></Route>
      </Routes>
    </Router>
  );
};
