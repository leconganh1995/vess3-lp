/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container, ContainerProps } from "@/components/Container";
import { TechCard1 } from "./TechCard1";
import { TechCard2 } from "./TechCard2";
import { TechMain } from "./TechMain";
import { useSectionState } from "@/store";

export const Tech = (props: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { animationStep } = useSectionState();

  return (
    <Container ref={containerRef} innerClassName="p-8" {...props}>
      <div className="flex flex-col items-center gap-10 max-w-content mx-auto h-full w-full relative mt-4 lg:mt-0">
        <h2 className="text-[40px] lg:text-[60px] leading-[1.1] text-center lg:text-left font-normal">
          The Tech Behind It All
        </h2>
        <p className="hidden lg:block">Description demo</p>
        <div className="hidden lg:block">
          <TechMain />
        </div>

        <div className="lg:hidden relative w-full">
          <AnimatePresence>
            {[TechMain, TechCard1, TechCard2].map((ForkComponent, index) => {
              return (
                animationStep === index + 1 && (
                  <motion.div
                    key={index}
                    className="absolute w-full h-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      zIndex: 3 - index,
                    }}
                  >
                    <ForkComponent />
                  </motion.div>
                )
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
};
