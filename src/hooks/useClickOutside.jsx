import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setActiveMenu, setPopupCoords} from "../redux/contextMenu/slice";

export const useClickOutside = (ref) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                dispatch(setActiveMenu(null));
                dispatch(setPopupCoords(null));
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, dispatch]);
}
