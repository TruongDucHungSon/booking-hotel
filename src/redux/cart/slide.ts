import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
}

const loadCartFromLocalStorage = (): CartItem[] => {
  try {
    const serializedCart = localStorage.getItem('cart');
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (e) {
    console.error('Could not load cart from localStorage', e);
    return [];
  }
};

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
  try {
    const serializedCart = JSON.stringify(cartItems);
    localStorage.setItem('cart', serializedCart);
  } catch (e) {
    console.error('Could not save cart to localStorage', e);
  }
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      const quantity = action.payload.quantity || 1; // Default to 1 if no quantity is provided

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...action.payload, quantity });
      }

      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.items);
    },
    updateCartItem: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
