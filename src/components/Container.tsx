import cls from "classnames";
import { HTMLMotionProps, motion, useAnimationControls } from "framer-motion";
import { forwardRef, useEffect } from "react";

import { useSectionState } from "@/store";

export interface ContainerProps extends HTMLMotionProps<"section"> {
  children?: React.ReactNode;
  innerClassName?: string;
  index: number;
  next: number;
  current: number;
  direction: "down" | "up";
  isInView?: boolean;
}

// eslint-disable-next-line react/display-name
export const Container = forwardRef(
  (
    {
      children,
      className,
      innerClassName,
      index, // sectionIndex
      next, // nextSectionIndex,
      current, // currentSectionIndex,
      direction,
      ...props
    }: ContainerProps,
    ref: any
  ) => {
    const { currentSectionIndex } = useSectionState();
    const controls = useAnimationControls();

    useEffect(() => {
      if (currentSectionIndex === index) {
        controls.start({
          opacity: 1,
          display: "block",
          y: 0,
          zIndex: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        });
      } else if (
        (index === currentSectionIndex - 1 && direction === "down") ||
        (index === currentSectionIndex + 1 && direction === "up")
      ) {
        controls.start({
          opacity: 0,
          zIndex: 0,
          display: "none",
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        });
      }
    }, [current, next, direction, controls, index, currentSectionIndex]);

    return (
      <motion.section
        ref={ref}
        animate={controls}
        className={cls(
          "flex main-section justify-center min-h-screen h-screen w-screen fixed top-0 opacity-0 overflow-hidden",
          {
            [className]: true,
          }
        )}
        {...props}
      >
        <div
          className={cls("absolute top-[98px] left-0 w-full bottom-0 py-6", {
            [innerClassName]: true,
          })}
        >
          {children}
        </div>
      </motion.section>
    );
  }
);
