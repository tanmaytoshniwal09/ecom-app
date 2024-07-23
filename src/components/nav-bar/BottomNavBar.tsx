import React from "react";
import {
  Container,
  Item,
  Heading,
  Text1,
  Text2,
  CustomTextField,
  
} from "./BottomNavBarStyles";
import { Grid } from "@mui/material";

const BottomNavBar = () => {
  const renderItem1 = () => (
    <Item item xs={3} md={2}>
      <Heading>Exclusive</Heading>
      <Text1>Subscribe</Text1>
      <Text2>Get 10% off your first order</Text2>
     
    </Item>
  );
  const renderItem2 = () => (
    <Item item xs={3} md={2}>
      <Text1>Support</Text1>
      <Text2>
        111 Bijoy sarani, Dhaka,
        <br /> DH 1515, Bangladesh.
      </Text2>
      <Text2>exclusive@gmail.com</Text2>
      <Text2>+88015-88888-9999</Text2>
    </Item>
  );
  const renderItem3 = () => (
    <Item item xs={3} md={2}>
      <Text1>Account</Text1>
      <Text2>My Account</Text2>
      <Text2>Login / Register</Text2>
      <Text2>Cart</Text2>
      <Text2>Wishlist</Text2>
      <Text2>Shop</Text2>
    </Item>
  );
  const renderItem4 = () => (
    <Item item xs={3} md={2}>
      <Text1>Quick Link</Text1>
      <Text2>Privacy Policy</Text2>
      <Text2>Terms Of Use</Text2>
      <Text2>FAQ</Text2>
      <Text2>Contact</Text2>
    </Item>
  );
  const renderItem5 = () => (
    <Item item xs={3} md={2}>
      <Text1>Q-Store App</Text1>
      <img src="/assets/bottom-navbar/Q-Logo.png" alt="Google Play" />
      
    </Item>
  );
  return (
    <Container container sx={{justifyContent:{xs:"flex-start",md:"center"},padding:"20px"}} >
      {renderItem1()}
      {renderItem2()}
      {renderItem3()}
      {renderItem4()}
      {renderItem5()}
    </Container>
  );
};

export default BottomNavBar;
