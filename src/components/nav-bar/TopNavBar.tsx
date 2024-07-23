import React, { useState } from "react";
import {
  Grid,
  InputAdornment,
  IconButton,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  colors,
} from "@mui/material";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  LogoText,
  NavLinkText,
  SearchField,
  HorizontalLine,
} from "./TopNavBarStyles";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const TopNavBar: React.FC = () => {
  const storedIsLogin = localStorage.getItem("isLogin");
  const [value, setValue] = useState<number | boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderUserProfileIcons = () => (
    <Grid
      item
      xs={12}
      direction={"row"}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={3}>
        <NavLinkText to="/dashboard">
          {/* <img
            src="/assets/top-navbar/Wishlist.png"
            alt="wishlist"
            style={{ width: "30px", height: "25px", border: "1.5px" }}
          /> */}
          <FavoriteBorderRoundedIcon sx={{width: "30px", height: "25px", border: "1.5px"}}/>
        </NavLinkText>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={3}>
        <NavLinkText to="/cart">
          <img
            src="/assets/top-navbar/Cart1.png"
            alt="cart"
            style={{ width: "30px", height: "25px", border: "1.5px" }}
          />
        </NavLinkText>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={3}>
      <NavLinkText to="/dashboard">
        <img
          src="/assets/top-navbar/user.png"
          alt="user"
          style={{ width: "30px", height: "25px", border: "1.5px" }}
        />
        </NavLinkText>
      </Grid>
    </Grid>
  );

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
      <List>
        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/contact"
          onClick={handleDrawerToggle}
        >
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/about"
          onClick={handleDrawerToggle}
        >
          <ListItemText primary="About" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/signup"
          onClick={handleDrawerToggle}
        >
          <ListItemText primary="Sign Up" />
        </ListItem>
      </List>
    </Drawer>
  );

  const getTabMarginLeft = () => {
    if (isSmallScreen) return 0;
    if (isLargeScreen) return "15px";
    return "50px";
  };

  return (
    <Grid container direction="column">
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          height: "fit-content",
        }}
      >
        <Grid
          sx={{
            width: "100%",
            height: "3rem",
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </Grid>
        <Toolbar sx={{ height: "60px", boxShadow: "none", marginTop: "10px" }}>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid
              item
              xs={3}
              sm={2}
              
              justifyContent={"flex-end"}
              alignItems={"center"}
              sx={{ display: "flex", justifyContent:"flex-end",alignItems:"center" }}
            >
              <LogoText>Q-Store</LogoText>
              <img></img>
            </Grid>
            {isMediumScreen ? (
              <>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  {storedIsLogin === "true" && renderUserProfileIcons()}
                </Grid>

                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                  sx={{ marginLeft: "auto" }}
                >
                  <MenuIcon
                    sx={{
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  />
                </IconButton>
              </>
            ) : (
              <>
                <Grid
                  item
                  xs={5}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Tabs
                    value={value}
                    sx={{
                      color: "black",
                      ".MuiTabs-indicator": { backgroundColor: "black" },
                      gap: getTabMarginLeft(),
                    }}
                    onChange={(e, val) => setValue(val)}
                  >
                    <Tab label="Home" />
                    <Tab
                      label="Contact"
                      sx={{ marginLeft: getTabMarginLeft() }}
                    />
                    <Tab
                      label="About"
                      sx={{ marginLeft: getTabMarginLeft() }}
                    />
                    <Tab
                      label="Sign Up"
                      component={Link}
                      to="/signup"
                      sx={{
                        color: "black",
                        textDecoration: "none",
                        marginLeft: getTabMarginLeft(),
                      }}
                    />
                  </Tabs>
                </Grid>
                <Grid item xs={1} />
                <Grid
                  container
                  item
                  xs={4}
                  direction={"row"}
                  alignItems="center"
                >
                  <Grid item xs={8}>
                    <SearchField
                      variant="outlined"
                      size="small"
                      placeholder="Search..."
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
                  <Grid container item xs={4} justifyContent="flex-end">
                    {storedIsLogin === "true" && renderUserProfileIcons()}
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
        <HorizontalLine item xs={12} />
      </AppBar>
      {drawer}
    </Grid>
  );
};

export default TopNavBar;
