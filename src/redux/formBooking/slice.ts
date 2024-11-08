import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingData {
  store?: string;
  serviceLocation?: string;
  selectedTime?: string;
  selectedStaff?: string;
  startDate?: Date;
}

interface BookingState {
  bookingData: BookingData | null;
}

// Save booking data to localStorage
// Save booking data to localStorage
const saveLocalStorageBookingData = (data: BookingData) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('bookingData', JSON.stringify(data));
  }
};

// Retrieve booking data from localStorage
const getLocalStorageBookingData = (): BookingData | null => {
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
    bookingData: getLocalStorageBookingData() || null, // Initialize from localStorage if available
  } as BookingState, // Explicitly define the state type here
  reducers: {
    setBookingData(state, action: PayloadAction<BookingData>) {
      state.bookingData = action.payload;
      saveLocalStorageBookingData(action.payload); // Save to localStorage when setting
    },
    clearBookingData(state) {
      state.bookingData = null;
      clearLocalStorageBookingData(); // Clear from localStorage when clearing the data
    },
  },
});

export const { setBookingData, clearBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;
