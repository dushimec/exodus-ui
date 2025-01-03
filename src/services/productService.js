import axios from '../axios'
import cookies from 'js-cookie'

// create endpoint

export const createProduct = async () =>{
    const response = await axios.post('/product/')
    return response.data
}

export const getAllProducts =  async () =>{
    const response = await axios.get('/product')
    return response.data
}

export const getProductsByCategoryName = async (category) =>{
    const response = await axios.get(`/category/${category}`)
    return response.data
}


export const updateProduct = async (id) => {
    const response = await axios.put(`/product/${id}`)
    return response.data
}

export const deleteProduct = async (id) =>{
    const response = await axios.delete(`/product/${id}`)
    return response.data
}

export const aggregateProductsByCategory = async (aggregate) =>{
    const response = await axios.get(`/product/${aggregate}`)
    return response.data
}

export const getMostOrderedProducts = async (mostOrdered) => { 
    const response = await axios.get(`/product/${mostOrdered}`); 
    return response.data;
  };
  
 export const  getRecentProducts = async (recent) =>{
    const response = await axios.get(`/product/${recent}`)
    return response.data
 }

 //booking routes
 export const bookProduct = async (book) =>{
    const response = await axios.post(`/product/${book}`)
    return response.data
 }

 export const getBookingsByProductId = async(id) =>{
    const response = await axios.get(`/product${id}bookings`)
    return response.data
 }
   
 export const cancelBooking = async (bookingId) => {
    const response = await axios.delete('/cancel-booking', {
      data: { bookingId }, // Include bookingId in the request body
    });
    return response.data;
  };
  
