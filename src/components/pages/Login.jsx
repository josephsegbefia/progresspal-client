import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
import {
  FormGroup,
  FormWrapper,
  Label,
  InputWrapper,
  Input,
  SubmitButton,
  LoginWrapper
} from "../styled/styled";

const API_URL = "http://localhost:5005";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();
      })
      .catch((error) => {
        console.log(error);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <LoginWrapper>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <InputWrapper>
              <Input
                type="password"
                id="password"
                placeholder="*******"
                value={password}
                onChange={handlePasswordChange}
              />
            </InputWrapper>
          </FormGroup>
          <SubmitButton type="submit">Log In</SubmitButton>
        </form>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;
