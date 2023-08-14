import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setActiveWindow} from "../redux/window/slice";

export const useClickOutside = (ref ) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) 
                dispatch(setActiveWindow(null));
        };
        document.addEventListener("contextmenu", handleClickOutside);
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("contextmenu", handleClickOutside);
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, dispatch]);
}