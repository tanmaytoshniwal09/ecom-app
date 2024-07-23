// TopNavBarStyles.ts
import { styled } from "@mui/material/styles";
import { Grid, Typography, TextField, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

export const TopBannerStyle = styled(Grid)(({ theme }) => ({
  width: "100%",
  background: "black",
  height: "48px",
  padding: "12px 24px",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const BannerText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  fontFamily: "Poppins",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "21px",
}));

export const ShopNowText = styled("span")(({ theme }) => ({
  color: "white",
  cursor: "pointer",
  marginLeft: "10px",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  textAlign: "center",
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "24px",
  fontWeight: 700,
   height:"100%",
   width:"fit-content",
  letterSpacing: "0.03em",
  // textAlign: "left",
  color: "black",
  margin:"0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const NavLinkText = styled(Link)(({ theme }) => ({
  color: "black",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
  textAlign: "center",
  textDecoration: "none", // Remove underline
  padding: "8px 16px",
  borderRadius: "4px",
  transition: "all 0.3s ease-in-out", // Add transition effect
  "&:hover, &:focus": {
    backgroundColor: theme.palette.grey[200], // Elevate the selected field
    boxShadow: theme.shadows[4],
    textDecoration: "none", // Ensure underline is not added on hover/focus
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  width: "fit-content",
  height: "30px",
  background: "#FFFFFF",
  gap: "10px",
  borderRadius: "4px 0px 0px 0px",
  marginBottom: "10px",
}));

export const LanguageIconButton = styled(IconButton)(({ theme }) => ({
  color: "white",
}));

export const LanguageArrowIcon = styled(ArrowDropDownIcon)(({ theme }) => ({
  color: "white",
}));

export const HorizontalLine = styled(Grid)(({ theme }) => ({
  borderTop: "1px solid lightgray",
  margin: "16px 0",
  width: "100%",
  opacity: 1,
}));
