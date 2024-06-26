import { styled } from "@mui/system";
import { Grid, TextField, Typography } from "@mui/material";

export const Container = styled(Grid)({
  background: "black",
  justifyContent: "center",
  height: "440px",
  padding: "80px 0px 24px 0px",
  gap: "20px",
});

export const Item = styled(Grid)({
  textAlign: "left",
  color: "white",
  width: "Hug (217px)px",
  height: "Hug (188px)px",
  gap: "16px",
  opacity: "0px",
});

export const Heading = styled(Typography)({
  marginBottom:"2rem",
  fontFamily: "Inter",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.03em",
  textAlign: "left",
  color: "#FAFAFA",
});

export const Text1 = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "28px",
  textAlign: "left",
  marginBottom: "2rem",
  color: "#FAFAFA",
});

export const Text2 = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  textAlign: "left",
  marginBottom: "1rem",
  color: "#FAFAFA",
});

export const CustomTextField = styled(TextField)({
  background: "white",
  borderRadius: "4px",
  width: "calc(100%-20px)",
});

export const SocialContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "40%",
  marginLeft: "10px",
});
