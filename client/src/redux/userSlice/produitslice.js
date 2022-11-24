import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

               // get the list of produit

export const getproduit = createAsyncThunk("getproduit/get",async () => {
    try {
        let response = await axios.get("http://localhost:5000/produit/produit");
    return await response;
    
    } catch (error) {
        console.log(error)
    }
});

                 // add a new produit

export const postproduit = createAsyncThunk("produit/add",async (act) => {
    try {
        let response = await axios.post("http://localhost:5000/produit/add",act);
    return await response;
    
    } catch (error) {
        console.log(error)
    }
});

                  // update an produit

export const updateproduit = createAsyncThunk("produit/updated",async ({id,produit}) => {
    try {
        let response = await axios.put(`http://localhost:5000/produit/produit/update/${id}`,produit);
    return await response;
    
    } catch (error) {
        console.log(error)
    }
});

                   // delete an produit

export const deleteproduit = createAsyncThunk("produit/delete",async ({id}) => {
    try {
        let response = await axios.delete(`http://localhost:5000/produit/produit/delete/${id}`);
    return await response;
    
    } catch (error) {
        console.log(error)
    }
});

const initialState = {
    produit:null,
    status:null
   }
   
   export const produitSlice = createSlice({
     name: 'produit',
     initialState,
     reducers: {},
     extraReducers:{

               // get extrareducers

       [getproduit.pending]: (state)=> {
           state.status = "pending";
       },
       [getproduit.fulfilled]: (state,action)=> {
           state.status = "successful";
           state.produit = action.payload.data.produit;
       },
       [getproduit.rejected]: (state)=> {
           state.status = "failed";
       },

               // add extrareducers

       [postproduit.pending]: (state)=> {
        state.status = "pending";
       },
       [postproduit.fulfilled]: (state,action)=> {
        state.status = "successful";
       },
       [postproduit.rejected]: (state)=> {
        state.status = "failed";
       },

       // update extrareducers

       [updateproduit.pending]: (state)=> {
        state.status = "pending";
       },
       [updateproduit.fulfilled]: (state,action)=> {
        state.status = "successful";
       },
       [updateproduit.rejected]: (state)=> {
        state.status = "failed";
       },

       // delete extrareducers

       [deleteproduit.pending]: (state)=> {
        state.status = "pending";
       },
       [deleteproduit.fulfilled]: (state,action)=> {
        state.status = "successful";
       },
       [deleteproduit.rejected]: (state)=> {
        state.status = "failed";
       },

}})
       export default produitSlice.reducer