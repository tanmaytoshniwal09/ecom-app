import React from "react";
import {
  Container,
  Item,
  Heading,
  Text1,
  Text2,
  CustomTextField,
  SocialContainer,
} from "./BottomNavBarStyles";
import { Grid } from "@mui/material";

const BottomNavBar = () => {
  const renderItem1=()=>(
    <Item item xs={12} md={2}>
    <Heading>Exclusive</Heading>
    <Text1>Subscribe</Text1>
    <Text2>Get 10% off your first order</Text2>
    <CustomTextField
      placeholder="Enter Your Email"
      variant="outlined"
      type="email"
    />
  </Item>
  )
  const renderItem2=()=>(
    <Item item xs={12} md={2}>
    <Text1>Support</Text1>
    <Text2>
      111 Bijoy sarani, Dhaka,
      <br /> DH 1515, Bangladesh.
    </Text2>
    <Text2>exclusive@gmail.com</Text2>
    <Text2>+88015-88888-9999</Text2>
  </Item>
  )
  const renderItem3=()=>(
    <Item item xs={12} md={2}>
        <Text1>Account</Text1>
        <Text2>My Account</Text2>
        <Text2>Login / Register</Text2>
        <Text2>Cart</Text2>
        <Text2>Wishlist</Text2>
        <Text2>Shop</Text2>
      </Item>
  )
  const renderItem4=()=>(
    <Item item xs={12} md={2}>
    <Text1>Quick Link</Text1>
    <Text2>Privacy Policy</Text2>
    <Text2>Terms Of Use</Text2>
    <Text2>FAQ</Text2>
    <Text2>Contact</Text2>
  </Item>
  )
  const renderItem5=()=>(
    <Item item xs={12} md={2}>
    <Text1>Downloads</Text1>
    <Text2 style={{ fontSize: "12px", lineHeight: "18px" }}>
      Save $3 with App New User Only
    </Text2>
    <Grid container item direction="row" spacing={2} alignItems="center">
      <Grid item>
        <img
          src="/assets/bottom-navbar/Qrcode 1.png"
          alt="QR Code"
          style={{ maxWidth: "100%" }}
        />
      </Grid>
      <Grid
        container
        item
        direction="column"
        spacing={2}
        width="fit-content"
        paddingTop="10px"
        alignContent="center"
      >
        <Grid item width="fit-content">
          <img
            src="/assets/bottom-navbar/download-appstore.png"
            alt="Download App Store"
            style={{ width: "fit-content" }}
          />
        </Grid>
        <Grid item width="fit-content" margin={0}>
          <img
            src="/assets/bottom-navbar/google play.png"
            alt="Google Play"
            style={{ width: "fit-content", marginTop: "5px" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignContent="center"
        paddingTop="8px"
      >
        <SocialContainer>
          <img
            src="/assets/bottom-navbar/Icon-Facebook.png"
            alt="Facebook"
            style={{ maxWidth: "100%" }}
          />
          <img
            src="/assets/bottom-navbar/icon-instagram.png"
            alt="Instagram"
            style={{ maxWidth: "100%" }}
          />
          <img
            src="/assets/bottom-navbar/Vector.png"
            alt="Vector"
            style={{ maxWidth: "100%" }}
          />
          <img
            src="/assets/bottom-navbar/Icon-Linkedin.png"
            alt="LinkedIn"
            style={{ maxWidth: "100%" }}
          />
        </SocialContainer>
      </Grid>
    </Grid>
  </Item>
  )
  return (
   
    <Container container>
      {renderItem1()}
       {/*Grid Container 2 For Support */}
     {renderItem2()}
     {renderItem3()}
     {renderItem4()}
   {renderItem5()}
     
    </Container>
  );
};

export default BottomNavBar;
