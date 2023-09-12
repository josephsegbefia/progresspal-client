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
  Pwrapper,
  LoginWrapper
} from "../styled/styled";

const Login = () => {
  return (
    <LoginWrapper>
      {/* <FormWrapper> */}
      <form>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="example@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <InputWrapper>
            <Input
              //   type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="*******"
            />
          </InputWrapper>
        </FormGroup>

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
      {/* </FormWrapper> */}
    </LoginWrapper>
  );
};

export default Login;
