// TopNavBarStyles.ts
import { styled } from "@mui/material/styles";
import { Grid, Typography, TextField, IconButton, MenuItem, Menu } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const TopBanner = styled(Grid)(({ theme }) => ({
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
  lineHeight: "24px",
  letterSpacing: "0.03em",
  textAlign: "left",
}));

export const NavLinkText = styled(Typography)(({ theme }) => ({
  color: "black",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
  textAlign: "center",
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  width: "280px",
  height: "38px",
  background: "#FFFFFF",
//   padding: "7px 12px 7px 20px",
  gap: "10px",
  borderRadius: "4px 0px 0px 0px",
  marginBottom: "16px",

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
  opacity: 0.3,
}));
