import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  padding: 2rem 4rem;
  @media (max-width: 665px) {
    padding: 2rem;
  }
`;

export const CartTitle = styled.h2`
  font-weight: 400;
  font-size: 30px;
  text-align: center;
`;

export const CartTitles = styled.div`
  margin: 2rem 0 1rem 0;
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
  font-family: Poppins;
  font-weight: 500px;
  font-size: 16px;
  /* text-align: left; */
  @media (max-width: 665px) {
    display: none;
  }
`;

export const CartTitleItem = styled.h3`
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
  &:nth-child(1) {
    padding-left: 0.5rem;
  }
  &:nth-child(4) {
    padding-right: 0.5rem;
    justify-self: right;
  }
`;

export const CartItem = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  
  padding: 1rem 0;
  @media (max-width: 665px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;

export const CartProduct = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const CartProductImage = styled.img`
  width: 100px;
  max-width: 100%;
  margin-right: 1rem;
`;

export const CartProductName = styled.h3`
  font-weight: 400;
  margin-bottom: 0.5rem;
  width: auto;
  font-family: Poppins;
  text-align: left;
  font-size: 20px;
`;

export const CartProductButton = styled.button`
  border: none;
  outline: none;
  margin-top: 0.5rem;
  cursor: pointer;
  background: none;
  color: gray;
  font-size: 14px;
  &:hover {
    color: black;
  }
`;

export const CartProductQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const QuantityButton = styled.button`
  border: none;
  outline: none;
  background: none;
  /* padding: 0.5rem; */
  cursor: pointer;
`;

export const QuantityCount = styled.div`
  padding: 0.5rem;
`;

export const CartProductTotalPrice = styled.div`
  font-weight: 700;
  justify-self: right;
  @media (max-width: 665px) {
    justify-self: left;
  }
`;

export const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  padding-top: 2rem;
  @media (max-width: 665px) {
    flex-direction: column;
  }
`;

export const ClearButton = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  border: 0.5px solid rgb(177, 177, 177);
  color: gray;
  background: none;
  outline: none;
  cursor: pointer;
  @media (max-width: 665px) {
    margin-bottom: 1rem;
  }
`;

export const CartCheckout = styled.div`
  width: 100%;
  max-width: 270px;
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-top: 1rem;
`;

export const Amount = styled.span`
  font-weight: 700;
`;

export const CheckoutNote = styled.p`
  font-size: 14px;
  font-weight: 200;
  margin: 0.5rem 0;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  background-color: #4b70e2;
  color: #f9f9f9;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ContinueShopping = styled.div`
  margin-top: 1rem;
`;

export const ContinueShoppingLink = styled(Link)`
  color: gray;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const ContinueShoppingSpan = styled.span`
  margin-left: 0.5rem;
`;

export const CartEmpty = styled.div`
  font-size: 20px;
  margin-top: 2rem;
  color: rgb(84, 84, 84);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
