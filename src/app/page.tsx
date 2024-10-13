"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SECTION_DATA } from "@/constants";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useTouch, useWheel } from "@/hooks/useEvents";
import { useScrollIntoSection } from "@/hooks/useScrollIntoSection";
import { useSectionState } from "@/store";
import { BlackHole } from "@/views/Sections/BlackHole";
import { PointCloud } from "@/views/Sections/PointCloud";

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

    const totalSectionSteps = isLg
      ? SECTION_DATA[currentSectionIndex].totalStep || 1
      : SECTION_DATA[currentSectionIndex].mobileStep || 1;
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
      <AnimatePresence>
        {currentSectionIndex < 3 && (
          <motion.div>
            <BlackHole />
          </motion.div>
        )}
      </AnimatePresence>
      <PointCloud />

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
