import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Admin } from "../admin";
import authService from "../../Services/authService";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const admin = localStorage.getItem("isAdmin");
  React.useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  return (
    <>
      {admin === "true" ? (
        <Admin />
      ) : (
        <div>
          <div>Dashboard</div>
        </div>
      )}
    </>
  );
};
