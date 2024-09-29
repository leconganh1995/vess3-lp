import { useEffect, MutableRefObject } from "react";
import { useBreakpoint } from "./useBreakpoint";

const SPEED = 0.03;
const ANGEL = 1.5;

interface Props {
  containerRef: MutableRefObject<HTMLElement>;
  childrenClass: string;
  offsetY?: number;
}

export const useMousemoveParallax = ({
  containerRef,
  childrenClass,
  offsetY = 0,
}: Props) => {
  const { isXl } = useBreakpoint("xl");

  useEffect(() => {
    const parallaxElements =
      containerRef.current.querySelectorAll(childrenClass);

    if (!isXl) {
      parallaxElements.forEach((item: HTMLImageElement | HTMLDivElement) => {
        item.style.transform = `unset`;
      });
      return;
    }
    const handleMouseMove = (e: MouseEvent) => {
      const pageX = e.clientX;
      const pageY = e.clientY;
      const moveX = pageX * ANGEL;

      parallaxElements.forEach((item: HTMLImageElement | HTMLDivElement) => {
        item.style.transform = `translate(
          calc(${moveX / 3} * calc(${SPEED} * 1px)),
          calc(${
            pageY - offsetY
          } * calc(${SPEED} * 1px))) rotate3d(calc(${moveX} * ${SPEED}), calc(${pageY} * ${SPEED}), 1, 20deg)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [childrenClass, containerRef, offsetY, isXl]);
};
