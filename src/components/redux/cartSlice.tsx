import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface CartItem {
  id: string;
  name: string;
  price: number;
  cartQuantity: number;
  imageURL: string;
  desc: string;
}

interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `Increased ${state.cartItems[itemIndex].name} cart quantity`,
          { position: "bottom-left" }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart: (state, action: PayloadAction<{ id: string }>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      toast.error("Product removed from cart", {
        position: "bottom-left",
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotals: (state) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
    
  },
});

export const {
  addToCart,
  decreaseCart,
  removeFromCart,
  getTotals,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
/* 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { combineReducers } from "redux";
import { WishlistData } from "../dashboard/WishlistData";
import { SuggestionData } from "../dashboard/SuggetionData";

// Define interfaces
interface CartItem {
  id: string;
  name: string;
  price: number;
  cartQuantity: number;
  imageURL: string;
  desc: string;
}

interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

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
const initialCartState: CartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const initialWishlistState: IWishlistState = {
  wishlistData: WishlistData,
};

const initialSuggestionState: ISuggestionState = {
  suggestionData: SuggestionData,
};

// Cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `Increased ${state.cartItems[itemIndex].name} cart quantity`,
          { position: "bottom-left" }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart: (state, action: PayloadAction<{ id: string }>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      toast.error("Product removed from cart", {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals: (state) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

// Wishlist slice
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    deleteItems: (state, action: PayloadAction<{ id: number }>) => {
      state.wishlistData = state.wishlistData.filter(
        (item) => item.id !== action.payload.id
      );
      toast.info("Item removed from wishlist", { position: "bottom-left" });
    },
  },
});

// Suggestion slice
const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: initialSuggestionState,
  reducers: {},
});

// Combine reducers
export const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  wishlist: wishlistSlice.reducer,
  suggestion: suggestionSlice.reducer,
});

// Export actions
export const {
  addToCart,
  decreaseCart,
  removeFromCart,
  getTotals,
  clearCart,
} = cartSlice.actions;

export const { deleteItems } = wishlistSlice.actions;

export default rootReducer;
 */