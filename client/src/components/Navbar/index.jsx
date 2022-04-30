import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      Navbar<br></br>
      <Link to='/'>logo</Link>
      <Link to='/signin'>signin</Link>
      <Link to='/signup'>signup</Link>
    </div>
  );
};
