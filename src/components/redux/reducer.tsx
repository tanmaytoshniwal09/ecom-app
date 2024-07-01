// reducer.ts
import { combineReducers } from "redux";
import { WishlistData } from "../dashboard/WishlistData";
import { SuggestionData } from "../dashboard/SuggetionData.js";
import cartReducer from "./cartSlice";
import { DELETE_ITEMS } from "./action";
// Define interface for WishlistState
interface IWishlistItem {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

interface ISuggestionItem {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

interface ISuggestionState {
  suggestionData: ISuggestionItem[];
}

interface IWishlistState {
  wishlistData: IWishlistItem[];
}

// Initial states
const initialWishlistState: IWishlistState = {
  wishlistData: WishlistData,
};

const initialSuggestionState: ISuggestionState = {
  suggestionData: SuggestionData,
};

// Wishlist reducer
const wishlistReducer = (
  state = initialWishlistState,
  action: any
): IWishlistState => {
  switch (action.type) {
    case DELETE_ITEMS:
      return {
        ...state,
        wishlistData: state.wishlistData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

// Suggestion reducer (assuming you have actions for this reducer as well)
const suggestionReducer = (
  state = initialSuggestionState,
  action: any
): ISuggestionState => {
  switch (action.type) {
    default:
      return state;
  }
};

// Root reducer
export const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  suggestion: suggestionReducer,
  cart: cartReducer,
});

export default rootReducer;
