import { useEffect, useRef } from "react";

export const useScrollBottom = (content) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [content]);

  return ref;
};
