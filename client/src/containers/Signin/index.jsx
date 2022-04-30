import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/authSlice";
import { Spinner } from "../../components/Spinner";
export const Signin = () => {
  const [formdata, setformdata] = React.useState({
    email: "",
    password: "",
  });
  const { email, password } = formdata;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess } = useSelector((state) => state.auth);
  React.useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isSuccess, navigate, dispatch]);
  const onChange = (e) => {
    setformdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }; //test
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <h1>Connect to your account</h1>
      <form onSubmit={onSubmit}>
        <input
          type='email'
          name='email'
          value={email}
          placeholder='enter your email'
          onChange={onChange}
        />
        <input
          type='password'
          name='password'
          value={password}
          placeholder='enter your password'
          onChange={onChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
