import axios from '../axios'
import cookies from 'js-cookie'

// create endpoint

export const createBooking = async (postId) =>{
    const response = await axios.post(`/booking/${postId}`)
    return response.data;
}

