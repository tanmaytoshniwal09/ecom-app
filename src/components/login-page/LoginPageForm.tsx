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
} from "./LoginPageFormStyles";
import { Link, TextField, Typography } from "@mui/material";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  emailOrPhone: yup.string().required("Email or Phone Number is required"),
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

const LoginPageForm = () => {
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
  };

  return (
    <FormContainer  sx={{padding:"0px"}}>
      <Typography variant="h4" component="h2" gutterBottom>
        Create an account
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
        <Typography sx={{flex:1}}>  Sign up with Google</Typography>
       
      </GoogleButton>

      <LoginText variant="body2">
        Already have an account? <Link href="/login">Log in</Link>
      </LoginText>
    </FormContainer>
  );
};

export default LoginPageForm;
