import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Signin } from "../Signin";
import { Signup } from "../Signup";
import { Dashboard } from "../Home";
import { Errorpage } from "../Errorpage";
import { Navbar } from "../../components/Navbar";
import classes from "./app.module.css";

export const App = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Navbar />
                  <Dashboard />
                </>
              }
            ></Route>
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
        <ToastContainer />
      </div>
    </>
  );
};
