﻿import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setActiveWindow} from "../redux/window/slice";

export const useClickOutside = (ref ) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleClickOutside = () => {
            if (ref.current && !ref.current.contains(event.target)) 
                dispatch(setActiveWindow(null));
        };
        document.addEventListener("mouseup", handleClickOutside);
        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, [ref, dispatch]);
}