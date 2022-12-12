import { createSlice } from "@reduxjs/toolkit";

interface Bucket {
  nom: string;
  img: string;
  ingredients: string;
  price: number;
  allergen: string;
  key: string;
  cartQuantity: number;
}

type InitialState = {
  items: Bucket[];
  cartTotal: number;
  cartTotalPrice: number;
};

const initialState: InitialState = {
  items: [],
  cartTotal: 0,
  cartTotalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.nom === action.payload.nom
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1;
      } else {
        const doubleItem = { ...action.payload, cartQuantity: 1 };
        state.items.push(doubleItem);
      }
    },
    removeFromCart(state, action) {
      const next = state.items.filter(
        (item) => item.nom !== action.payload.nom
      );
      state.items = next;
    },
    decreaseQtity(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.nom === action.payload.nom
      );
      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1;
      } else if (state.items[itemIndex].cartQuantity === 1) {
        const next = state.items.filter(
          (item) => item.nom !== action.payload.nom
        );
        state.items = next;
      }
    },
    increaseQtity(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.nom === action.payload.nom
      );
      state.items[itemIndex].cartQuantity += 1;
    },
    clearCart(state, action) {
      state.items = [];
    },
    getTotals(state, action) {
      let { total, quantity } = state.items.reduce(
        (cartTotal, item) => {
          const { price, cartQuantity } = item;
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
      state.cartTotal = quantity;
      state.cartTotalPrice = total;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  decreaseQtity,
  increaseQtity,
  clearCart,
  getTotals,
} = cartSlice.actions;
