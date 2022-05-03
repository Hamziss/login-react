import React from "react";
import adminService from "../../Services/adminService";

export const Admin = () => {
  const name = localStorage.getItem("name");
  const [email, setemail] = React.useState("");
  const handleClick = () => {
    console.log(email);
    adminService.addAdmin({ email: email });
  };
  return (
    <>
      <div>hello admin {name} how you doing today</div>
      <input type='email' onChange={(e) => setemail(e.target.value)} />
      <button onClick={handleClick}>add as admin</button>
    </>
  );
};
