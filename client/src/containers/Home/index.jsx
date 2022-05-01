import React from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  React.useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  return (
    <div>
      <div>Dashboard</div>
    </div>
  );
};
