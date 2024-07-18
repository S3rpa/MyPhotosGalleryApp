import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => action.payload,
    clearSearch: () => '',
  },
});

export const { setSearch, clearSearch } = searchSlice.actions;
export const selectSearch = (state) => state.search;
export default searchSlice.reducer;
