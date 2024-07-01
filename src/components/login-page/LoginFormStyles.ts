import { styled } from "@mui/system";
import {
  Container,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
} from "@mui/material";

export const FormContainer = styled(Container)({
  width: "341px",
  height: "530px",
  gap: "48px",
  opacity: "1", // Assuming you want the form to be visible
  border: "none",
  borderRadius: "none",
  textAlign: "left",
  paddingLeft: "0px !important",
  paddingRight: "0px !important",
});

export const FormGroup = styled("div")({
  marginBottom: "15px",
});

export const SubmitButton = styled(Button)({
  width: "143px",
  height: "56px",
  padding: "16px",
  gap: "10px",
  borderRadius: "4px 0px 0px 0px",
  backgroundColor: "#DB4444",
  color: "#FAFAFA",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  textAlign: "left",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#c03a3a",
  },
});

export const GoogleButton = styled(Button)({
  marginTop: "10px",
  width: "371px",
  height: "56px",
  padding: "16px",
  paddingLeft: "80px",
  gap: "10px",
  border: "1px solid black",
  borderRadius: "4px 0px 0px 0px",
  backgroundColor: "#FAFAFA",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  textAlign: "left",
  textTransform: "none",
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
});

export const LoginText = styled(Typography)({
  marginTop: "20px",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  color: "#000000",
});
