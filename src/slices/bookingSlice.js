import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cookies from 'js-cookie';

import { createBooking as bookingService } from '../services/bookingService';

// Thunk for booking
export const createBooking = createAsyncThunk('booking/postId', async (postId, { rejectWithValue }) => {
    try {
        const response = await bookingService(postId);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }
});

// Slice for booking
const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        booking: [],
        loading: false,
        error: null,
        token: cookies.get('token'),
    },
    reducers: {
        resetBooking: (state) => {
            state.booking = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.booking = action.payload.booking;
            })
            .addCase(createBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
