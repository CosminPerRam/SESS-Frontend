﻿import { createSlice } from '@reduxjs/toolkit';
import {useRef} from "react";

const initialState = {
    activeMenu: null,
    popupCoords: null,
    action: null,
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
    },
});

export const { setActiveMenu, setPopupCoords, setAction } = contextMenuSlice.actions;
export default contextMenuSlice.reducer;