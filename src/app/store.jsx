import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "../features/images/imagesSlice";

export const store = configureStore({
    reducer: {
        images: imagesReducer
    }
})