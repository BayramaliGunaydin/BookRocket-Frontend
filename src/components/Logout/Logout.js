import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/AuthActions";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
    navigate("/");
  }, []);

  return (
    <div>
      <p>lorem</p>
    </div>
  );
}

export default Logout;
