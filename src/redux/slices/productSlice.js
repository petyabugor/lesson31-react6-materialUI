import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProduct = createAsyncThunk(
    'products/fetchProduct',
    async function () {
        try{
            const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
        } catch(error){
            console.error(error)
        }
        
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: false,
        error: false,
    },
    reducers:{
        ascOrder: (state) => {
            state.items.sort((a, b)=> {
                return a.title.localeCompare(b.title);
              })
          },
        descOrder: (state) => {
            state.items.sort((a, b)=> {
            return b.title.localeCompare(a.title);
            })
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state) =>{
            state.status = true
            state.error = false
        })
        .addCase(fetchProduct.fulfilled, (state,action) =>{
            state.items = action.payload;
            state.status = false;
        })
        .addCase(fetchProduct.rejected, (state,action)  =>{
            state.error = true
            state.status= false;
        })
    },
});


export const {descOrder, ascOrder} = productSlice.actions;
export const selectProducts = state => state.products.items;
export const selectStatus= state => state.products.status;
export const selectErrorState = state => state.products.error;
export default productSlice.reducer;