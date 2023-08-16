import { useDispatch } from "react-redux";
import { useCallback } from "react";

export const useDispatchHandler = () => {
  const dispatch = useDispatch();
  return useCallback(
    (e, ...setArray) => {
      if (e !== null) e.preventDefault();
      setArray.forEach((setItem) => dispatch(setItem));
    },
    [dispatch]
  );
};
