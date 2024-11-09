/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Save booking data to localStorage
// Save booking data to localStorage
const saveLocalStorageBookingData = (data: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('bookingData', JSON.stringify(data));
  }
};

// Retrieve booking data from localStorage
const getLocalStorageBookingData = (): any => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem('bookingData');
    return storedData ? JSON.parse(storedData) : null;
  }
  return null; // Return null when accessed on the server-side
};

// Clear booking data from localStorage
const clearLocalStorageBookingData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('bookingData');
  }
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookingData: getLocalStorageBookingData() || null,
    selectedService: null,
  },
  reducers: {
    setBookingData(state, action: PayloadAction<any>) {
      state.bookingData = action.payload;
      saveLocalStorageBookingData(action.payload); // Save to localStorage when setting
    },

    setSelectedService(state, action: PayloadAction<any>) {
      state.selectedService = action.payload; // Save selected service to Redux
      localStorage.setItem('selectedService', JSON.stringify(action.payload)); // Save to localStorage
    },

    clearBookingData(state) {
      state.bookingData = null;
      clearLocalStorageBookingData(); // Clear from localStorage when clearing the data
    },
  },
});

export const { setBookingData, clearBookingData, setSelectedService } = bookingSlice.actions;
export default bookingSlice.reducer;
