import React from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
// import {yupResolver} from "@hookform/resolvers/yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormContainer,
  FormGroup,
  SubmitButton,
  GoogleButton,
  LoginText,
} from "./SignUpPageFormStyles";
import { TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[aA-zZ\s]+$/, "Only Alphabet")
    .min(3, "Minimum 3 letters are required"),
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
  name: string;
  emailOrPhone: string;
  password: string;
}

const SignUpPageForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // Save to local storage
    localStorage.setItem("userId", data.emailOrPhone);
    localStorage.setItem("password", data.password);
    alert("Account created and data saved to local storage");
    navigate("/login");
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
        Create an account
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
            label="Name"
            variant="standard"
            fullWidth
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{
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
            label="Email or Phone Number"
            variant="standard"
            fullWidth
            {...register("emailOrPhone")}
            error={!!errors.emailOrPhone}
            helperText={errors.emailOrPhone?.message}
            sx={{
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
            fullWidth
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              textAlign: "left",
              marginBottom: "20px",
            }}
          />
        </FormGroup>
        <SubmitButton type="submit" variant="contained" fullWidth>
          Create Account
        </SubmitButton>
      </form>
      <GoogleButton variant="contained">
        <img
          src="/assets/login-page/Icon-Google.png"
          alt="Google Play"
          style={{ width: "24px", height: "24px", marginRight: "10px" }}
        />
        <Typography sx={{ flex: 1 }}> Sign up with Google</Typography>
      </GoogleButton>

      <LoginText>
        Already have an account?{" "}
        <Link
         to="/login"
          style={{
            marginLeft: "5px",
            marginTop: "20px",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#000000",
          }}
        >
          {" "}
          Log in
        </Link>
      </LoginText>
    </FormContainer>
  );
};

export default SignUpPageForm;
