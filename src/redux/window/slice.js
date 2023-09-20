import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeWindow: null,
  serverDetails: null,
  consoleLines: [],
  inputCommand: ``,
  addServerTo: ``,
  addServerIp: ``,
};

const windowSlice = createSlice({
  name: `window`,
  initialState,
  reducers: {
    setActiveWindow: (state, action) => {
      state.activeWindow = action.payload;
    },
    addConsoleLine: (state, action) => {
      state.consoleLines = [...state.consoleLines, action.payload];
    },
    setServerDetails: (state, action) => {
      state.serverDetails = action.payload;
    },
    setInputCommand: (state, action) => {
      state.inputCommand = action.payload;
    },
    setAddServerTo: (state, action) => {
      state.addServerTo = action.payload;
    },
    setAddServerIp: (state, action) => {
      state.addServerIp = action.payload;
    },
  },
});

export const {
  setActiveWindow,
  addConsoleLine,
  setServerDetails,
  setInputCommand,
  setAddServerTo,
  setAddServerIp,
} = windowSlice.actions;
export default windowSlice.reducer;
