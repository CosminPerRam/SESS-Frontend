import { useEffect, useState } from "react";
import { useActiveMenu } from "./useActiveMenu";

export const useClick = () => {
  const { closeMenu } = useActiveMenu();

  useEffect(() => {
    document.addEventListener(`mousedown`, () => closeMenu());
    window.addEventListener(`resize`, () => closeMenu());
    console.log(`ceau`);
    return () => {
      document.removeEventListener(`mousedown`, () => closeMenu());
      window.removeEventListener(`resize`, () => closeMenu());
    };
    //needed dependency?
  }, []);
};
