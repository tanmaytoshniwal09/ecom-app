import React from "react";
import { Grid, Box } from "@mui/material";
import LoginPageForm from "./LoginPageForm";

const LoginPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", padding: "20px" }}
      direction={"row"}
    >
      <Grid
        container
        item
        xs={12}
        md={12}
        lg={12}
        xl={12}
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction={{ xs: "row", md: "row", lg: "row", xl: "row" }} // Direction based on breakpoints
        sx={{ gap: "20px" }}
      >
        <Grid
          item
          xs={6}
          md={6}
          sx={{
            position: "relative",
            left: "-120px",
            top: "-40px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          width={"fit-content"}
        >
          <Box
            component="img"
            src="/assets/login-page/Side Image.png"
            alt="Side Image"
            sx={{
              width: "919px",
              maxWidth: "919px",
              height: "auto",
              minHeight: "706px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          width={"fit-content"}
        >
          <LoginPageForm />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
