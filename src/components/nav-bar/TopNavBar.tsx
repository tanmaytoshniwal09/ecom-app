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
    setInputValues({ ...inputValues, language: lang, anchorEl: null });
  };

  const handleLanguageListClick = (event: React.MouseEvent<HTMLElement>) => {
    setInputValues({ ...inputValues, anchorEl: event.currentTarget });
  };

  const handleMenuClose = () => {
    setInputValues({ ...inputValues, anchorEl: null });
  };

  const storedIsLogin = localStorage.getItem("isLogin");

  const renderTopBanner = () => (
    <TopBanner container item xs={6}>
      <BannerText variant="h6" color="white">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <ShopNowText>
          <u style={{ marginRight: "10px" }}>Shop Now</u>
        </ShopNowText>
      </BannerText>

      <Typography sx={{ color: "white" }}>{inputValues.language}</Typography>
      <LanguageIconButton
        edge="end"
        aria-label="language"
        onClick={handleLanguageListClick}
      >
        <LanguageArrowIcon />
      </LanguageIconButton>

      <Menu
        anchorEl={inputValues.anchorEl}
        open={Boolean(inputValues.anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleLanguageChange("English")}>
          English
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange("Spanish")}>
          Spanish
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange("French")}>
          French
        </MenuItem>
      </Menu>
    </TopBanner>
  );

  const renderUserProfileIcons = () => (
    <Grid
      item
      container
      xs={12}
      sm={2}
      lg={2}
      md={3}
      justifyContent="space-evenly"
      spacing={2}
    >
      <Grid item>
        <NavLinkText to="/dashboard">
          <img
            src="/assets/top-navbar/Wishlist.png"
            alt="wishlist"
            style={{ width: "30px", height: "25px", border: "1.5px" }}
          />
        </NavLinkText>
      </Grid>
      <Grid item>
        <NavLinkText to="/cart">
          <img
            src="/assets/top-navbar/Cart1.png"
            alt="cart"
            style={{ width: "30px", height: "25px", border: "1.5px" }}
          />
        </NavLinkText>
      </Grid>
      <Grid item>
        <img
          src="/assets/top-navbar/user.png"
          alt="user"
          style={{ width: "30px", height: "25px", border: "1.5px" }}
        />
      </Grid>
    </Grid>
  );

  const renderNavBar = () => (
    <Grid container xs={12}
    sm={12}
    justifyContent="center" sx={{ paddingTop: "16px" }}>
      <Grid
        container
        item
        xs={12}
        sm={10}
        
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo */}
        <Grid item xs={6} sm={2} md={3}>
          <LogoText variant="h6">Exclusive</LogoText>
        </Grid>
        {/* Navigation Links */}
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            display: {
              xs: "none",
              sm: "flex", 
              md: "flex",
              lg: "flex",
              xl: "flex",
              xxl: "flex",
              mb: "none" ,
            },
          }}
        >
          <Grid item>
            <NavLinkText to="/">Home</NavLinkText>
          </Grid>
          <Grid item>
            <NavLinkText to="/contact">Contact</NavLinkText>
          </Grid>
          <Grid item>
            <NavLinkText to="/about">About</NavLinkText>
          </Grid>
          <Grid item>
            <NavLinkText to="/signup">Sign Up</NavLinkText>
          </Grid>
        </Grid>
        {/* Search Field */}
        <Grid
          item
          xs={12}
          sm={1}
          
          lg={2}
          sx={{ display: { xs: "none", sm: "block", } }}
        >
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
        {/* Icons */}
        {storedIsLogin === "true" ? renderUserProfileIcons() : null}
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
