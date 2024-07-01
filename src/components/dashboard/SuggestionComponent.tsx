import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItems } from "../redux/action";
import {
  SuggestionContainer,
  SuggestionHeader,
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
  StyledTypography,
  RatingStars,
  StyledVisibilityIcon,
} from "./SuggestionComponentStyle";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const SuggestionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { suggestionData, loading, error } = useSelector(
    (state: any) => state.suggestion
  );

 ;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
    // navigate("/cart");
  };
  return (
    <SuggestionContainer>
      <SuggestionHeader>
        <p>Just For You</p>
      </SuggestionHeader>
      <CartContainer>
        {suggestionData.map((item: any) => (
          <CartItem key={item.id}>
            <CartItemInner>
              <CartItemRemove>
                <StyledIconButton>
                  {/* onClick={() => dispatch(deleteItems(item))} */}
                  <StyledVisibilityIcon />
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
                  onClick={() => handleAddToCart(item)}
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
              <RatingStars>
                {Array.from({ length: item.rating }).map((_, index) => (
                  <span
                    key={index}
                    style={{ color: "#FFAD33", height: "20px", width: "20px" }}
                  >
                    &#9733;
                  </span> // Unicode star character
                ))}
              </RatingStars>
            </CartItemDetails>
          </CartItem>
        ))}
      </CartContainer>
    </SuggestionContainer>
  );
};

export default SuggestionComponent;
