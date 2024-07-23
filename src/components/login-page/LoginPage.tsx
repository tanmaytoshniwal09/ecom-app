import React from "react";
import { Grid, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LoginPageForm from "./LoginPageForm"; // Adjust the import according to your file structure

const LoginPage = () => {
  const theme = useTheme();
  const isLessThan1500px = useMediaQuery(theme.breakpoints.down("xl"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const imageStyles = isLessThan1500px
    ? {
        width: "auto",
        maxWidth: "100%", // Adjusted max width for smaller screens
        height: "auto",
        minHeight: "60vh",
        objectFit: "cover",
      }
    : {
        width: "100%",
        maxWidth: "919px",
        height: "auto",
        minHeight: "706px",
        objectFit: "cover",
      };

  const gridItemStyles = isSmallScreen
    ? {
        marginTop: "20px", // Adjust margin top for small screens
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }
    : {};

  return (
    <Grid container direction="row" alignItems="center" marginBottom={40}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          justifyItems: "flex-start",
          justifyContent: "flex-start",
          alignItems: "center",
          ...gridItemStyles,
        }}
      >
        <Box
          component="img"
          src="/assets/login-page/Side Image.png"
          alt="Side Image"
          sx={imageStyles}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={
          isSmallScreen
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : { xs: { marginTop: "60px" } }
        }
      >
        <LoginPageForm />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
