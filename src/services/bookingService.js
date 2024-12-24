import axios from '../axios'
import cookies from 'js-cookie'


// create endpoint

export const createBooking = async (postId) =>{
    const response = await axios.post(`/booking/${postId}`)
    return response.data;
}

export const getBookingById = async (id) =>{
    const response = await axios.get(`/booking/${id}`)
    return response.data;
}

export const getBookings = async () =>{
    const response = await axios.get('/booking/')
    return response.data
}


export const updateBooking = async (id) =>{
    const response = await axios.put(`/booking/${id}`)
    return response.data
}

export const deleteBooking = async (id) =>{
    const response = await axios.delete(`/booking/${id}`)
    return response.data
}

export const cancelBooking  = async (id) => {
    const respone = await axios.patch(`/booking/${id}/cancel`)
    return respone.data
}

export const approveBooking = async (id) =>{
    const response = await axios.patch(`booking/${id}/approve`)
    return response.data
}
