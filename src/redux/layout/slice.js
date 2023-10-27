import { createSlice } from "@reduxjs/toolkit";
//move filters to it's component
const initialState = {
  simplifiedList: false,
  filters: true,
  //make constants
  activeTab: `Internet`,
};

const layoutSlice = createSlice({
  name: `layout`,
  initialState,
  reducers: {
    setSimplifiedList: (state, action) => {
      state.simplifiedList = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setSimplifiedList, setFilters, setActiveTab } =
  layoutSlice.actions;
export default layoutSlice.reducer;
