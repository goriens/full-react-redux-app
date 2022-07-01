import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../Redux/Auth/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  const isError = useSelector((state) => state.authReducer.isError);
  //  console.log("loading", isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((r) => {
        if (r.type === "USER_LOGIN_SUCCESS") {
          navigate(comingFrom, { replace: true });
        }
      });
    }
  };

  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <p>User Email </p>
          <input
            placeholder="Enter Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>User Password </p>
          <input
            placeholder="Enter Your Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isLoading && <p>Please Wait...</p>}
        {isError && <p>User or password wrong, Try again...</p>}
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
