import { combineReducers } from '@reduxjs/toolkit'; // Import combineReducers from @reduxjs/toolkit
import cartReducer from '../redux/cart/slide';
import bookingReducer from '../redux/formBooking/slice';
// Combine reducers from different slices into a single root reducer
const rootReducer = combineReducers({
  booking: bookingReducer,
  cart: cartReducer,
});

// Define type for the root reducer
export type RootReducer = typeof rootReducer;
// Define type for the root state
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer; // Export the root reducer
