import { createSlice } from "@reduxjs/toolkit";
import { getRandomImagesThunk } from "./imagesThunk";

export const imagesSlice = createSlice({
  name: "images",
  initialState: {
    data: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomImagesThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getRandomImagesThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getRandomImagesThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  }
});

export const getRandomImagesData = (state) => state.images.data;
export const getRandomImagesStatus = (state) => state.images.status;
export const getRandomImagesError = (state) => state.images.error;

export default imagesSlice.reducer;
