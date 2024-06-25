import React, { useState } from "react";
import {
  Grid,
  MenuItem,
  InputAdornment,
  Menu,
  Typography,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  TopBanner,
  BannerText,
  ShopNowText,
  LogoText,
  NavLinkText,
  SearchField,
  LanguageIconButton,
  LanguageArrowIcon,
  HorizontalLine,
} from "./TopNavBarStyles";

const TopNavBar = () => {
  const [inputValues, setInputValues] = useState<{
    language: string;
    anchorEl: HTMLElement | null;
  }>({
    language: "English",
    anchorEl: null,
  });
  

  const handleLanguageChange = (lang: string) => {
    setInputValues({ ...inputValues, language: lang });
    handleMenuClose();
  };

  const handleLanguageListClick = (event: React.MouseEvent<HTMLElement>) => {
    setInputValues({ ...inputValues, anchorEl: event.currentTarget });
  };

  const handleMenuClose = () => {
    setInputValues({ ...inputValues, anchorEl: null });
  };

  const renderTopBanner = () => (
    <TopBanner container item xs={12}>
      <BannerText variant="h6" color="white">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <ShopNowText>
          <u style={{ marginRight: "10px" }}>Shop Now</u>
        </ShopNowText>
      </BannerText>

      <Typography sx={{ color: "white" }}>{inputValues.language}</Typography>
      <LanguageIconButton edge="end" aria-label="language" onClick={handleLanguageListClick}>
        <LanguageArrowIcon />
      </LanguageIconButton>

      <Menu anchorEl={inputValues.anchorEl} open={Boolean(inputValues.anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleLanguageChange("English")}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageChange("Spanish")}>Spanish</MenuItem>
        <MenuItem onClick={() => handleLanguageChange("French")}>French</MenuItem>
      </Menu>
    </TopBanner>
  );

  const renderNavBar = () => (
    <Grid container item xs={12} justifyContent="center" sx={{ paddingTop: "16px" }}>
      <Grid container xs={10} justifyContent="space-evenly" sx={{ paddingTop: "16px" }}>
        <Grid container item xs={8} justifyContent="space-around" alignItems="center">
          {/* Logo */}
          <Grid item xs={2}>
            <LogoText variant="h6">Exclusive</LogoText>
          </Grid>
          <Grid container item xs={8} spacing={2} justifyContent="space-evenly" alignItems="center">
            <Grid item>
              <NavLinkText>Home</NavLinkText>
            </Grid>
            <Grid item>
              <NavLinkText>Contact</NavLinkText>
            </Grid>
            <Grid item>
              <NavLinkText>About</NavLinkText>
            </Grid>
            <Grid item>
              <NavLinkText>Sign Up</NavLinkText>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={4}>
          <Grid item>
            <SearchField
              variant="outlined"
              placeholder="What are you looking for?"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton color="inherit" aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container direction="column">
      {renderTopBanner()}
      {renderNavBar()}
      <HorizontalLine item xs={12} />
    </Grid>
  );
};

export default TopNavBar;
