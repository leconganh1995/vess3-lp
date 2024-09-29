"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { SECTION_DATA } from "@/constants";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useTouch, useWheel } from "@/hooks/useEvents";
import { useScrollIntoSection } from "@/hooks/useScrollIntoSection";
import { useSectionState } from "@/store";

export default function Home() {
  useScrollIntoSection();

  const [isAnimating, setIsAnimating] = useState(false);
  const { isLg } = useBreakpoint("lg");
  const [canScroll, setCanScroll] = useState(true);

  const {
    currentSectionIndex,
    setCurrentSectionIndex,
    nextSectionIndex,
    setNextSectionIndex,
    animationStep,
    setAnimationStep,
    isIntroLoaded,
    sectionAnimating,
    direction,
    setDirection,
  } = useSectionState();

  const handleAnimationComplete = () => {
    setCurrentSectionIndex(nextSectionIndex);
    setIsAnimating(false);
  };

  const handleChangeSection = (dir: any) => {
    if (isAnimating || !isIntroLoaded || !canScroll || sectionAnimating) return;

    if (currentSectionIndex === 0 && dir === "up") return;
    if (currentSectionIndex === SECTION_DATA.length - 1 && dir === "down")
      return;

    const totalSectionSteps = SECTION_DATA[currentSectionIndex].totalStep || 1;
    const nextStep = dir === "down" ? animationStep + 1 : animationStep - 1;
    const isNextOutOfStep = nextStep < 1 || nextStep > totalSectionSteps;
    const timeout = isNextOutOfStep || isLg ? 1500 : 1000;

    setCanScroll(false);
    setTimeout(() => {
      setCanScroll(true);
    }, timeout);

    if (!isNextOutOfStep) {
      setAnimationStep(nextStep);
      setDirection(dir);
      return;
    }

    setAnimationStep(1);
    setDirection(dir);

    const nextIndex =
      dir === "down"
        ? (currentSectionIndex + 1) % SECTION_DATA.length
        : (currentSectionIndex - 1 + SECTION_DATA.length) % SECTION_DATA.length;
    setNextSectionIndex(nextIndex);
    setIsAnimating(true);
  };

  useWheel(handleChangeSection);
  useTouch(handleChangeSection);

  return (
    <div className="max-w-screen h-screen overflow-hidden max-h-screen relative">
      <motion.img
        src="/images/blackhole.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        alt=""
        animate={{
          opacity: currentSectionIndex > 2 ? 0 : 1,
        }}
      />

      {SECTION_DATA.slice(0, currentSectionIndex + 2).map((item, index) => (
        <item.element
          onAnimationComplete={handleAnimationComplete}
          current={currentSectionIndex}
          next={nextSectionIndex}
          direction={direction}
          isInView={nextSectionIndex === item.index}
          index={index}
          key={item.id}
        />
      ))}
    </div>
  );
}
