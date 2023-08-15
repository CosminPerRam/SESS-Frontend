import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeMenu: null,
  popupCoords: null,
  hiddenColumns: {
    Password: false,
    Secure: false,
    Replay: false,
    Servers: false,
    ["IP Address"]: true,
    Game: false,
    Players: false,
    Bots: false,
    Map: false,
    Latency: false,
    Tags: false,
  },
  inputCommand: "",
};

const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    setPopupCoords: (state, action) => {
      state.popupCoords = action.payload;
    },
    setHiddenColumns: (state, action) => {
      state.hiddenColumns[action.payload] =
        !state.hiddenColumns[action.payload];
    },
    setInputCommand: (state, action) => {
      state.inputCommand = action.payload;
    },
  },
});

export const {
  setActiveMenu,
  setPopupCoords,
  setHiddenColumns,
  setInputCommand,
} = contextMenuSlice.actions;
export default contextMenuSlice.reducer;
