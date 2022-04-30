import React from "react";

export const Signin = () => {
  const [formdata, setformdata] = React.useState({
    email: "",
    password: "",
  });
  const { email, password } = formdata;

  const onChange = (e) => {
    setformdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }; //test
  const onSubmit = (e) => {
    e.preventDefault();
  };
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
