import { combineReducers } from '@reduxjs/toolkit'; // Import combineReducers from @reduxjs/toolkit
import bookingReducer from '../redux/formBooking/slice';
// Combine reducers from different slices into a single root reducer
const rootReducer = combineReducers({
  booking: bookingReducer,
});

// Define type for the root reducer
export type RootReducer = typeof rootReducer;
// Define type for the root state
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer; // Export the root reducer
