import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    maxPlayerCount: "",
    latency: null,
};

const localFiltersSlice = createSlice({
    name: 'localFilters',
    initialState,
    reducers: {
        setMaxPlayerCount: (state, action) => {
            state.maxPlayerCount = action.payload;
        },
        setLatency: (state, action) => {
            state.latency = action.payload;
        },
    },
});

export const { setMaxPlayerCount, setLatency } =
    localFiltersSlice.actions;
export default localFiltersSlice.reducer;
