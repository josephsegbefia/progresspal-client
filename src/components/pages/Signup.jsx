import React, { useState } from "react";

import {
  FormGroup,
  FormWrapper,
  Label,
  InputWrapper,
  Input,
  SubmitButton,
  SignUpWrapper,
  GridItem
} from "../styled/styled";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <SignUpWrapper>
      <GridItem>First Item</GridItem>
      <GridItem>
        <FormWrapper>
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input type="text" id="firstName" placeholder="Portia" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input type="text" id="lastName" placeholder="Deffor" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="example@gmail.com" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <InputWrapper>
              <Input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="*******"
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
              />
            </InputWrapper>
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </FormWrapper>
      </GridItem>
    </SignUpWrapper>
  );
};

export default SignUp;
