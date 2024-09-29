import { useEffect, MutableRefObject } from "react";

export const useClickOutside = (
  ref: MutableRefObject<any>,
  callback: () => void
) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
