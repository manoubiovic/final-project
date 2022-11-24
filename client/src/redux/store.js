import { configureStore } from "@reduxjs/toolkit";
import  produitSlice  from "./userSlice/produitslice";


import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    produit:produitSlice,

    

  },
});
