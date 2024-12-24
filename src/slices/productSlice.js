import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cookies from 'js-cookie';
import {createProduct as createProductService, getAllProducts as getAllProductsService, getProductsByCategoryName as getProductsByCategoryNameService,updateProduct as updateProductService, deleteProduct as deleteProductService, aggregateProductsByCategory as aggregateProductsByCategoryService, getMostOrderedProducts as getMostOrderedProductsService, getRecentProducts as getRecentProductsService} from '../services/productService'



// thunk for createproduct
export const createProduct = createAsyncThunk('product/createProduct', async ({rejectWithValue}) => {
    try {
        const response = await createProductService();
        return response;
    } catch (error){
        return rejectWithValue(error.response?.data)
    }
});


// thunk for getallproducts
export const getAllProducts = createAsyncThunk('product/getAllProucts' , async({rejectWithValue}) =>{
    try{
        const response = await getAllProductsService();
        return response;
    }catch{
        return rejectWithValue(error.response?.data)
    }
});

//thunk for getProductsByCategoryName

export const getProductsByCategoryName = createAsyncThunk('product/getProductsByCategoryName' , async(category, {rejectWithValue}) =>{
    try{
        const response = await getProductsByCategoryNameService(category);
        return response;
    }catch{
        return rejectWithValue(error.response?.data)
    }
});

//thunk for updateProduct
export const updateProduct = createAsyncThunk('product/updateProduct' , async(id, {rejectWithValue}) =>{
    try{
        const response = await updateProductService(id);
        return response;
    } catch{
        return rejectWithValue(error.response?.data)
    }
});

//thunk for deleteProduct
export const deleteProduct = createAsyncThunk('product/deleteProduct' , async(id, {rejectWithValue}) =>{
    try{
        const response = await deleteProductService(id)
        return response
    }catch{
        return rejectWithValue(error.response?.data)
    }
});


//thunk for aggregateProductsByCategory
export const aggregateProductsByCategory= createAsyncThunk('product/aggregateProductsByCategory' , async(aggregate, {rejectWithValue}) =>{
    try{
        const response = await aggregateProductsByCategoryService(aggregate);
        return response;
    }catch{
        return rejectWithValue(error.response?.data)
    }
});

//thunk for getMostOrderedProducts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMostOrderedProductsService } from './services'; // Import your service function

export const getMostOrderedProducts = createAsyncThunk(
  'product/getMostOrderedProducts',
  async (mostOrderedParams, { rejectWithValue }) => { // Use "mostOrderedParams" instead of "most-ordered"
    try {
      const response = await getMostOrderedProductsService(mostOrderedParams);
      return response; // Return the response data
    } catch (error) {
      return rejectWithValue(error.response?.data); // Ensure "error" is defined
    }
  }
);


// export const getMostOrderedProducts =  createAsyncThunk('product/getMostOrderedProducts', async (most-ordered,  {rejectWithValue}) => {
// try{
//     const response = await getMostOrderedProductsService(most-ordered);
//     return response;
// } catch {
//     return rejectWithValue(error.response?.data)
// }
// });



//thunk for getRecentProducts
export const getRecentProducts = createAsyncThunk('product/getRecentProducts' , async(recent, {rejectWithValue}) =>{
    try{
const response = await getRecentProductsService(recent);
return response;
    }catch{
        return rejectWithValue(error.response?.data)
    }
});

//slice for product

const productSlice = createSlice({
    name: 'product',
    initialState:{
        products:[],
        loading:false,
        error:null,
        product:null,
        success:false,
        token: cookies.get('token'),
    },
    reducers:{
        resetProduct(state,action){
            state.product = null;
            state.success = false;
        },
    },

     //builder for createproduct
     extraReducers:(builder) => {
        builder

        .addCase(createProduct.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        state.success = false;
     })

        .addCase(createProduct.fulfilled,(state,action) =>{
            state.loading = false;
            state.error = null;
            state.success = true;
            state.product = action.payload.product;

        })

        .addCase(createProduct.rejected, (state,action) =>{
            state.loading = false;
            state.error = action.payload;
            state.success = false;

        })

//builder for getAllProduct
.addCase(getAllProducts.pending, (state,action) => {
    state.loading = true;
    state.error = null;
    state.success = false;

})
.addCase(getAllProducts.fulfilled, (state,action) =>{
    state.loading = false;
    state.error = null;
    state.success = true;
    state.product = action.payload.products;

})
.addCase(getAllProducts.rejected, (state,action) =>{
    state.loading = false;
    state.error = action.payload;

})
 
//builer for get getProductsByCategoryName
.addCase(getProductsByCategoryName.pending , (state,action)=>{
    state.loading = true;
    state.error = null;
    state.success = false;

})
.addCase(getProductsByCategoryName.fulfilled, (state,action) =>{
    state.loading = false;
    state.error = null;
    state.success = true;
    state.product = action.payload.product;
})
.addCase(getProductsByCategoryName.rejected, (state,action) =>{
    state.loading = false;
    state.error = action.payload;

})
        

//builder for updateproduct
.addCase(updateCard.pending, (state,action) =>{
    state.loading = true;
    state.error = null;
    state.success = false;

})
.addCase(updateProduct.fulfilled, (state,action) =>{
    state.loading = false;
    state.error = null;
    state.success = true;
    state.product =  action.payload.product

})
.addCase(updateProduct.rejected, (state,action) =>{
    state.loading = false;
    state.error = action.payload;

})

// builder for deleteproduct
.addCase(deleteProduct.pending, (state, action) =>{
    state.loading =  true;
    state.error = null;
    state.success = false;

})
.addCase(deleteProduct.fulfilled , (state,action) =>{
    state.loading = false;
    state.error = null;
    state.success = true;


})
.addCase(deleteProduct.rejected, (state,action) =>{
    state.loading = false;
    state.error = action.payload;

})

//builder for aggregateProductsByCategory
.addCase(aggregateProductsByCategory.pending, (state,action) =>{
    state.loading = true;
    state.error = null;
    state.success = false;

})
.addCase(aggregateProductsByCategory.fulfilled, (state,action)=>{
    state.loading = false;
    state.error = null;
    state.success = true;
    state.products = action.payload.products;

})
.addCase(aggregateProductsByCategory.rejected, (state,action) =>{
    state.loading = false;
    state.error = action.payload;

})

//thunk for getMostOrderedProducts

.addCase(getMostOrderedProducts.pending, (state,action) =>{
    state.loading = true;
    state.error = null;
    state.success = false;

})
.addCase(getMostOrderedProducts.fulfilled, (state,action) =>{
    state.loading = false;
    state.error = null;
    state.success = true;
    state.mostOrderedProducts= action.payload.products;

})
.addCase(getMostOrderedProducts.rejected, (state,action) =>{
    state.loading = false;
    state.error = action.payload;
})



//builder for getRecentProducts
.addCase(getRecentProducts.pending, (state,action) =>{
    state.loading  = true;
    state.error = null;
    state.success = false;

})
.addCase(getRecentProducts.fulfilled, (state,action)=>{
    state.loading = false;
    state.error = null;
    state.success = true;
    state.recentProducts= action.payload.products;

})
.addCase(getRecentProducts.rejected, (state,action) =>{
    state.loading = false;
    state.error = action.payload;
    
})
     }

})
export const { resetProduct } = productSlice.actions;
export default productSlice.reducer;


