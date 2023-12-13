import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({ username: "exampleUser" }));
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
