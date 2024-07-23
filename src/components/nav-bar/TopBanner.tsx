import React, { useState } from "react";
import { BannerText, LanguageArrowIcon, LanguageIconButton, ShopNowText, TopBannerStyle } from "./TopNavBarStyles";
import { Menu, MenuItem, Typography } from "@mui/material";

function TopBanner() {
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

  return (
    <TopBannerStyle container item xs={6}>
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
    </TopBannerStyle>
  );
}

export default TopBanner;
