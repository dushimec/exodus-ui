import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cookies from 'js-cookie';

import { createBooking as bookingService ,getBookings as getBookingsService, getBookingById as getBookingByIdService, updateBooking as updateBookingService , deleteBooking as deleteBookingService, cancelBooking as cancelBookingService, approveBooking as approveBookingService} from '../services/bookingService';

// Thunk for createbooking
export const createBooking = createAsyncThunk('booking/postId', async (postId, { rejectWithValue }) => {
    try {
        const response = await bookingService(postId);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }
});

// thunk for GetBooking by id

export const getBookingById = createAsyncThunk('booking/getBookingById', async (id, {rejectWithValue}) =>{
    try {
        const response = await getBookingByIdService(id);
        return response;
    } catch(error){
        return rejectWithValue(error.response?.data)
    }
});

// thunk for getbooking
export const getBookings = createAsyncThunk('booking/getBookings', async ({rejectWithValue}) =>{
    try {
        const response =  await getBookingsService();
        return response;
    } catch(error){
        return rejectWithValue(error.response?.data)
    }
 
    });

    //thunk for updateBooking

    export const updateBooking = createAsyncThunk('booking/updateBooking' , async (id, rejectWithValue) =>{
        try{
            const response = await updateBookingService(id);
        } catch(error){
            return rejectWithValue(error.response?.data)
        }
    });
    // thunk for deletebooking

    export const deleteBooking = createAsyncThunk('booking/deleteBooking',async (id, {rejectWithValue}) =>{
        try{
            const response = await deleteBookingService(id);
        }catch(error){
            return rejectWithValue(error.response?.data)
        }
        
    });

//thunk for cancelBooking
export const cancelBooking = createAsyncThunk('booking/cancelBooking' ,async (id, {rejectWithValue}) => {
    try{
        const response = await cancelBookingService(id);
    }catch{
        return rejectWithValue(error.response?.data)
    }
});


// thunk for approvebooking
export const approveBooking = createAsyncThunk('booking/approveBooking' , async (id, {rejectWithValue}) =>{
    try{
        const response = await approveBookingService(id);
    }catch{
        return rejectWithValue(error.response?.data)
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

// builder for createBooking
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


    // builder for getbookingById

    builder
    .addCase(getBookingById.pending, (state,action) => {
        state.loading = true;
        state.error = null;
    })

    .addCase( getBookingById.fulfilled, (state,action) =>{
        state.loading = false;
        state.error =  null;
        state.booking = action.payload.booking;
    })
    .addCase( getBookingById.rejected, (state,action) =>{
        state.loading = false;
        state.error = action.payload;
    })

    // builder for getbookings
    builder
    .addCase(getBookings.pending, (state,action) => {
        state.loading = true;
        state.error = null
    })
    .addCase(getBookings.fulfilled, (state,action) => {
        state.loading =  false;
        state.error = null;
        state.booking = action.payload.booking;
    })
    .addCase(getBookings.rejected, (state,action) =>{
        state.loading = false;
        state.error = action.payload;
    })


    // builder for updateBooking

builder
.addCase(updateBooking.pending, (state,action) =>{
    state.loading = true;
    state.error = null;

})
.addCase(updateBooking.fulfilled, (state,action)=>{
    state.loading = false;
    state.error = null;
    state.booking = action.payload.booking;
})
.addCase(updateBooking.rejected, (state, action) =>{
    state.loading = false;
    state.error = action.payload;
})

// builder for deletebooking
builder
.addCase(deleteBooking.pending, (state,action) =>{
    state.loading = true;
    state.error = null;
    
})
.addCase(deleteBooking.fulfilled, (state,action) =>{
    state.loading = true;
    state.error = null;
    state.booking = action.payload.booking;
})
.addCase(deleteBooking.rejected, (state,action) =>{
    state.loading = false;
    state.error  = action.payload;
})


// builder for cancelBooking 
.addCase(cancelBooking.pending, (state, action) =>{
    state.loading = true;
    state.error = null;
})
.addCase(cancelBooking.fulfilled, (state, action) =>{
    state.loading = false;
    state.error = null;
    state.booking = action.payload.booking;
})
.addCase(cancelBooking.rejected, (state, action) =>{
    state.loading = false;
    state.error = action.payload;

})


// builder for approveBooking 
.addCase(approveBooking .pending, (state, action) =>{
    state.loading = true;
    state.error = null;
})
.addCase(approveBooking .fulfilled, (state, action) =>{
    state.loading = false;
    state.error = null;
    state.booking = action.payload.booking;
})
.addCase(approveBooking .rejected, (state, action) =>{
    state.loading = false;
    state.error = action.payload;

})

 }, 

});

export const { resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
