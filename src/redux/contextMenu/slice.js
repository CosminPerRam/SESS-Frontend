﻿import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeMenu: null,
    popupCoords: null,
    action: null,
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
    inputMap: '',
    inputMapPlayerCount: '',
    inputServer: ''
};

const contextMenuSlice = createSlice({
    name: 'contextMenu',
    initialState,
    reducers: {
        setActiveMenu: (state, action) => {
            state.activeMenu = action.payload;
        },
        setPopupCoords: (state, action) => {
            state.popupCoords = action.payload;
        },
        setAction: (state, action) => {
            state.action = action.payload;
        },
        setHiddenColumns: (state, action) => {
            state.hiddenColumns[action.payload] = !state.hiddenColumns[action.payload];
        },
        setInputMap: (state, action) => {
            state.inputMap = action.payload;
        },
        setInputMapPlayerCount: (state, action) => {
            state.inputMapPlayerCount = action.payload;
        },
        setInputServer: (state, action) => {
            state.inputServer = action.payload;
        }
    },
});

export const { setActiveMenu, setPopupCoords, setAction, setHiddenColumns, setInputMap, setInputMapPlayerCount, setInputServer } = contextMenuSlice.actions;
export default contextMenuSlice.reducer;
