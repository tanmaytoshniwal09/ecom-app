import React, { useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
// import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer, FormGroup, SubmitButton } from "./LoginFormStyles";
import {  TextField, Typography } from "@mui/material";
import { useNavigate ,} from "react-router";
import {  Link } from "react-router-dom";
const schema = yup.object().shape({
  
  emailOrPhone: yup
    .string()
    .required("Email or Phone Number is required")
    .test(
      "is-valid",
      "Must be a valid email or phone number",
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^[0-9]+$/.test(value)
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

interface IFormInput {

  emailOrPhone: string;
  password: string;
  isLogin?:boolean;
}

const LoginPageForm = () => {
  const navigate = useNavigate();
  const isLogin = false;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  
    // Retrieve stored credentials
    const storedEmailOrPhone = localStorage.getItem("userId");
    const storedPassword = localStorage.getItem("password");
  
    // Check if the entered credentials match the stored credentials
    if (data.emailOrPhone === storedEmailOrPhone && data.password === storedPassword) {
      alert("Credentials are correct. Redirecting to dashboard...");
      localStorage.setItem('isLogin', JSON.stringify(true));
      navigate("/dashboard");
    } else {
      alert("Incorrect username or password");
    }
  };
  
  return (
    <FormContainer sx={{ padding: "0px" }}>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "36px",
          fontWeight: "500",
          lineHeight: "30px",
          letterSpacing: "0.04em",
          textAlign: "left",
          marginBottom: "20px",
        }}
      >
        Log in to Exclusive
      </Typography>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "24px",
          textAlign: "left",
          marginBottom: "20px",
        }}
      >
        Enter your details below
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <TextField
            label="Email or Phone Number"
            variant="standard"
            {...register("emailOrPhone")}
            error={!!errors.emailOrPhone}
            helperText={errors.emailOrPhone?.message}
            sx={{
              width: "341px",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              textAlign: "left",
              marginBottom: "20px",
            }}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            label="Password"
            type="password"
            variant="standard"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{
              width: "341px",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              textAlign: "left",
              marginBottom: "20px",
            }}
          />
        </FormGroup>
        <div
          style={{
            display: "flex",
            width: "341px",
            height: "56px",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <SubmitButton type="submit" variant="contained" fullWidth>
            Log In
          </SubmitButton>
          <Link
            to="/ForgotPassword"
            style={{
              marginLeft: "5px",
              marginTop: "20px",
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: " #DB4444",
            }}
          >
            {" "}
            Forget Password?
          </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginPageForm;
