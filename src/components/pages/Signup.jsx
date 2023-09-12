import React, { useState } from "react";

import {
  FormGroup,
  FormWrapper,
  Label,
  InputWrapper,
  Input,
  SubmitButton,
  SignUpWrapper,
  GridItem,
  Pwrapper
} from "../styled/styled";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <SignUpWrapper>
      <GridItem
        style={{
          textAlign: "center",
          position: "relative"
        }}
      >
        <h2>Sign Up</h2>
        <br />
        <br />
        <Pwrapper>
          Do you always feel stuck when it comes to planning and plotting 🤣?
          Create an account & become more productive. Use our AI powered app to
          accomplish your tasks in bite sized chunks.
        </Pwrapper>
      </GridItem>
      <GridItem>
        <FormWrapper>
          <form onSubmit={formSubmit}>
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="Portia"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Deffor"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </FormGroup>
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
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="*******"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <InputWrapper>
                <Input
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="*******"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </InputWrapper>
            </FormGroup>
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormWrapper>
      </GridItem>
    </SignUpWrapper>
  );
};

export default SignUp;
