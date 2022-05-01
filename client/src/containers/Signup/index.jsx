import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assests/images/logo.png";
import { register, reset } from "../../features/authSlice";
import { Spinner } from "../../components/Spinner";
import classes from "./signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Signup = () => {
  const [formdata, setformdata] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { name, email, password, confirmpassword } = formdata;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess } = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isLoading, isSuccess, navigate, dispatch]);
  const onChange = (e) => {
    setformdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.formSide}>
          <div className={classes.formContainer}>
            <h1>Create an account</h1>
            <p className={classes.parsignup}>
              Welcome! create an account and login!
            </p>
            <form onSubmit={onSubmit}>
              <Box
                component='form'
                sx={{
                  width: "100%",
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  type='text'
                  name='name'
                  value={name}
                  onChange={onChange}
                  id='name'
                  label='name'
                  variant='outlined'
                  placeholder='Enter your name'
                />
              </Box>
              <Box
                component='form'
                sx={{
                  width: "100%",
                  margin: "20px 0px",
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  type='email'
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
                component='form'
                sx={{
                  width: "100%",
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  type='password'
                  name='password'
                  value={password}
                  placeholder='enter your password'
                  onChange={onChange}
                  id='passwordsignin'
                  label='Password'
                  variant='outlined'
                />
              </Box>
              <Box
                component='form'
                sx={{
                  width: "100%",
                  margin: "20px 0px",
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  type='password'
                  name='confirmpassword'
                  value={confirmpassword}
                  placeholder='Enter your password'
                  onChange={onChange}
                  id='confirmpassword'
                  label='Confirm password'
                  variant='outlined'
                />
              </Box>

              <button className={classes.signinBtn} type='submit'>
                Register
              </button>
              <Link to='/signin'>
                <div className={classes.backBtn}>
                  <FontAwesomeIcon
                    className={classes.arrow}
                    icon={faArrowLeftLong}
                  />
                  Go Back
                </div>
              </Link>
            </form>
          </div>
        </div>
        <div className={classes.logoSide}>
          <img
            src={logo}
            style={{ width: "45vw", maxWidth: "500px" }}
            alt='logo brand'
          />
        </div>
      </div>
    </>
  );
};
