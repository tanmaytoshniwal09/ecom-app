import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../redux/cartSlice";
import {
  CartContainer,
  CartTitle,
  CartTitles,
  CartTitleItem,
  CartItem as StyledCartItem,
  CartProduct,
  CartProductImage,
  CartProductName,
  CartProductButton,
  CartProductQuantity,
  QuantityButton,
  QuantityCount,
  CartProductTotalPrice,
  CartSummary,
  ClearButton,
  CartCheckout,
  Subtotal,
  Amount,
  CheckoutNote,
  CheckoutButton,
  ContinueShopping,
  ContinueShoppingLink,
  ContinueShoppingSpan,
  CartEmpty,
} from "./CartStyles"; // Adjust the path as needed
import { RootState } from "../redux/store"; // Adjust the path as needed
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Paper } from "@mui/material";

interface Product {
  id: string;
  name: string;
  imageURL: string;
  desc: string;
  price: number;
}

interface CartItem extends Product {
  cartQuantity: number;
}

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product: CartItem) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product: CartItem) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <CartContainer>
      <CartTitle>Shopping Cart</CartTitle>
      {cart.cartItems.length === 0 ? (
        <CartEmpty>
          <p>Your cart is currently empty</p>
          <ContinueShopping>
            <ContinueShoppingLink to="/dashboard">
              <ArrowBackIcon />
              <ContinueShoppingSpan>Start Shopping</ContinueShoppingSpan>
            </ContinueShoppingLink>
          </ContinueShopping>
        </CartEmpty>
      ) : (
        <div>
           <Paper elevation={3} style={{ marginBottom: '1rem', padding: '1rem' }}>
          <CartTitles>
            <CartTitleItem className="product-title">Product</CartTitleItem>
            <CartTitleItem>Price</CartTitleItem>
            <CartTitleItem>Quantity</CartTitleItem>
            <CartTitleItem className="total">Total</CartTitleItem>
          </CartTitles>
          </Paper>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem: any) => (
                <Paper key={cartItem.id} elevation={3} style={{ marginBottom: '1rem', padding: '1rem' }}>
                <StyledCartItem key={cartItem.id}>
                  <CartProduct>
                    <CartProductImage
                      src={cartItem.imageURL}
                      alt={cartItem.name}
                      onError={(e) => {
                        e.currentTarget.src = "/path/to/default/image.jpg";
                      }}
                    />
                    <CartProductName>{cartItem.name}</CartProductName>
                  </CartProduct>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <CartProductQuantity>
                    <QuantityButton onClick={() => handleDecreaseCart(cartItem)}>
                      <RemoveCircleOutlineIcon />
                    </QuantityButton>
                    <QuantityCount>{cartItem.cartQuantity}</QuantityCount>
                    <QuantityButton onClick={() => handleAddToCart(cartItem)}>
                      <AddCircleOutlineIcon />
                    </QuantityButton>
                  </CartProductQuantity>
                  <CartProductTotalPrice>
                    ${cartItem.price * cartItem.cartQuantity}
                  </CartProductTotalPrice>
                  <CartProductButton onClick={() => handleRemoveFromCart(cartItem)}>
                    <DeleteOutlineIcon />
                  </CartProductButton>
                </StyledCartItem>
                </Paper>
              ))}
          </div>
          <CartSummary>
            <ClearButton onClick={() => handleClearCart()}>
              Clear Cart
            </ClearButton>
            <CartCheckout>
              <Subtotal>
                <span>Subtotal</span>
                <Amount>${cart.cartTotalAmount}</Amount>
              </Subtotal>
              <CheckoutNote>
                Taxes and shipping calculated at checkout
              </CheckoutNote>
              <CheckoutButton>Check out</CheckoutButton>
              <ContinueShopping>
                <ContinueShoppingLink to="/dashboard">
                  <ArrowBackIcon />
                  <ContinueShoppingSpan>Continue Shopping</ContinueShoppingSpan>
                </ContinueShoppingLink>
              </ContinueShopping>
            </CartCheckout>
          </CartSummary>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
