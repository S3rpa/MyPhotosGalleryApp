import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "../features/images/imagesSlice";
import searchReducer  from '../features/search/searchSlice';


export const store = configureStore({
    reducer: {
        images: imagesReducer,
        search: searchReducer,
    },
});