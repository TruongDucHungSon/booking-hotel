// src/store/slices/bookingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingData {
  store: string;
  serviceLocation: string;
  selectedTime: string;
  selectedStaff: string;
  startDate: Date;
}

interface BookingState {
  bookingData: BookingData | null;
}

const initialState: BookingState = {
  bookingData: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingData(state, action: PayloadAction<BookingData>) {
      state.bookingData = action.payload;
    },
  },
});

export const { setBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;
