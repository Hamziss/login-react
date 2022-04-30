import React from "react";

export const Signup = () => {
  const [formdata, setformdata] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { name, email, password, confirmpassword } = formdata;

  const onChange = (e) => {
    setformdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
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
