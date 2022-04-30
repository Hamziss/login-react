import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/authSlice";
import { Spinner } from "../../components/Spinner";

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
      <h1>Create an account</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          value={name}
          placeholder='enter your name'
          onChange={onChange}
        />
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

        <input
          type='password'
          name='confirmpassword'
          value={confirmpassword}
          placeholder='confirm your password'
          onChange={onChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
