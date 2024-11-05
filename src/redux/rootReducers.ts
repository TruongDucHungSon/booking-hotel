import { combineReducers } from '@reduxjs/toolkit'; // Import combineReducers from @reduxjs/toolkit

// Combine reducers from different slices into a single root reducer
const rootReducer = combineReducers({});

// Define type for the root reducer
export type RootReducer = typeof rootReducer;
// Define type for the root state
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer; // Export the root reducer
