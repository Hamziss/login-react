import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/authSlice";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
      Navbar<br></br>
      <Link to='/'>logo</Link>
      <ul>
        {user ? (
          <li>
            <button onClick={onLogout}>logout</button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/signin'>signin</Link>
            </li>
            <li>
              <Link to='/signup'>signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
