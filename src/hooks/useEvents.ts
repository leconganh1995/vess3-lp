import { useEffect, useRef } from "react";

export const useWheel = (callback) => {
  useEffect(() => {
    const handleWheel = (e) => {
      callback(e.deltaY > 0 ? "down" : "up");
    };
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [callback]);
};

export const useTouch = (callback) => {
  const startY = useRef(0);

  useEffect(() => {
    const handleTouchStart = (e) => {
      startY.current = e.touches[0].clientY;
      console.log("handleTouchStart", startY);
    };

    const handleTouchEnd = (e) => {
      const deltaY = e.changedTouches[0].clientY - startY.current;

      if (deltaY > 20) callback("up");
      if (deltaY < -20) callback("down");
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [callback]);
};
