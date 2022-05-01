import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login, reset } from "../../features/authSlice";

import classes from "./signin.module.css";
import logo from "../../assests/images/logo.png";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Signin = () => {
  const [formdata, setformdata] = React.useState({
    email: "",
    password: "",
    staySignin: false,
  });
  const { email, password, staySignin } = formdata;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess } = useSelector((state) => state.auth);
  React.useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isSuccess, navigate, dispatch]);
  const onChange = (e) => {
    e.target.type === "checkbox"
      ? setformdata((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.checked,
        }))
      : setformdata((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      staySignin,
    };

    dispatch(login(userData));
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.formSide}>
        <div className={classes.formContainer}>
          <h1>Welcome back</h1>
          <p className={classes.parsignin}>
            Welcome back! Please enter your details
          </p>
          <form onSubmit={onSubmit}>
            <Box
              sx={{
                width: "100%",
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                type='email'
                sx={{
                  width: "100%",
                }}
                id='email'
                name='email'
                label='Email'
                value={email}
                variant='outlined'
                placeholder='Enter your email'
                onChange={onChange}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                margin: "20px 0px",
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                type='password'
                sx={{
                  width: "100%",
                }}
                onChange={onChange}
                id='password'
                name='password'
                label='Password'
                value={password}
                variant='outlined'
                placeholder='Enter your password'
              />
            </Box>
            <div className={classes.containerStayLoged}>
              <input
                className={classes.checkboxloged}
                type='checkbox'
                name='staySignin'
                onChange={onChange}
              />
              <p className={classes.stayLoged}> Stay signed in</p>
            </div>
            <button className={classes.signinBtn} type='submit'>
              Sign in
            </button>
            <div className={classes.GoogleBtn}>Sign in With Google</div>
          </form>
          <p className={classes.signup}>
            Don't have an account?&nbsp;
            <Link className={classes.btnsignup} to='/signup'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className={classes.logoSide}>
        <img
          src={logo}
          style={{ width: "50vw", maxWidth: "500px" }}
          alt='logo brand'
        />
      </div>
    </div>
  );
};
