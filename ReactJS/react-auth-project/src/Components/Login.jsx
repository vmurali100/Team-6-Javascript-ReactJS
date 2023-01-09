import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const Login = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = () => {
    auth.login(userName);
    navigate("/profile",{replace:true});
  };
  return (
    <div>
        <br />
      <input
        type="text"
        name=""
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      /> <br />
      <br />
      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Login User
      </button>

    </div>
  );
};

export default Login;
