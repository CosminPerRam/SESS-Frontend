import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  simplifiedList: false,
  filters: true,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setSimplifiedList: (state, action) => {
      state.simplifiedList = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setSimplifiedList, setFilters } = layoutSlice.actions;
export default layoutSlice.reducer;
