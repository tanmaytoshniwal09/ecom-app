import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  deleteItems } from "../redux/action";
import {
  WishlistContainer,
  WishlistHeader,
  CartContainer,
  CartItem,
  CartItemInner,
  CartItemRemove,
  CartItemImage,
  StyledImg,
  CartItemActions,
  CartItemDetails,
  CartItemName,
  CartItemPrice,
  StyledIconButton,
  StyledButton,
  StyledAddShoppingCartIcon,
  StyledDeleteIcon,
  StyledTypography,
} from "./WishlistComponentStyles";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const WishlistComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wishlistData, loading, error } = useSelector(
    (state: any) => state.wishlist
  );
  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
    // navigate("/cart");
  };
 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
 


  return (
    <WishlistContainer>
      <WishlistHeader>
        <p>Wishlist</p>
      </WishlistHeader>
      <CartContainer>
        {wishlistData.map((item: any) => (
          <CartItem key={item.id}>
            <CartItemInner>
              <CartItemRemove>
                <StyledIconButton onClick={() => dispatch(deleteItems(item))}>
                  <StyledDeleteIcon />
                </StyledIconButton>
              </CartItemRemove>
              <CartItemImage>
                <StyledImg src={item.imageURL} alt={item.name} />
              </CartItemImage>
              <CartItemActions>
                <StyledButton
                  fullWidth
                  variant="contained"
                  startIcon={<StyledAddShoppingCartIcon />}
                  onClick={() =>handleAddToCart(item) }
                >
                  Add to Cart
                </StyledButton>
              </CartItemActions>
            </CartItemInner>
            <CartItemDetails>
              <CartItemName>
                <StyledTypography variant="h6">{item.name}</StyledTypography>
              </CartItemName>
              <CartItemPrice>
                <p>${item.price}</p>
              </CartItemPrice>
            </CartItemDetails>
          </CartItem>
        ))}
      </CartContainer>
    </WishlistContainer>
  );
};

export default WishlistComponent;
