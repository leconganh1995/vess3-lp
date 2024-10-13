/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

import { Container, ContainerProps } from "@/components/Container";
import { TextGradient } from "@/components/TextGradient";
import { useSectionState } from "@/store";
import { GovernanceItem } from "./components/GovernanceItem";
import { GOVERNANCE_DATA } from "./data";

export const Governance = (props: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { animationStep } = useSectionState();

  return (
    <Container ref={containerRef} {...props} innerClassName="p-6">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between max-w-content mx-auto h-full w-full relative">
        <div className="max-w-content flex flex-col gap-3 lg:gap-8 items-start mt-4 lg:mt-0">
          <TextGradient className="lg:font-bold lg:mt-0 mx-auto lg:mx-[unset]">
            ABOUT US
          </TextGradient>
          <h2 className="text-[36px] lg:text-[60px] text-center lg:text-left max-w-[555px] leading-[1.1] font-normal">
            VESSEL INDEX GOVERNANCE
          </h2>
          <p className="max-w-[400px] hidden lg:block">
            The Vessel Index is designed to access diversified crypto portfolios
            with only One token: $VESSEL
          </p>
          <button className="text-left pl-4 w-[179px] h-[40px] bg-[url(/images/btn-bg-1.svg)] bg-cover bg-no-repeat hover:brightness-90 transition">
            LEARN MORE
          </button>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-10 w-[48.4375%]">
          {GOVERNANCE_DATA.map((item, index) => (
            <GovernanceItem item={item} index={index} key={index} />
          ))}
        </div>

        <div className="lg:hidden relative max-w-[290px] w-full aspect-[1.074] mt-8">
          <AnimatePresence>
            {GOVERNANCE_DATA.map(
              (item, index) =>
                animationStep === index + 1 && (
                  <motion.div
                    key={index}
                    className="absolute w-full h-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      zIndex: GOVERNANCE_DATA.length - index,
                    }}
                  >
                    <GovernanceItem item={item} index={index} />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center lg:hidden mt-5 gap-8">
          <p className="max-w-[400px] text-xs">
            The Vessel Index is designed to access diversified crypto portfolios
            with only One token: $VESSEL
          </p>
          <button className="text-left pl-4 w-[179px] h-[40px] bg-[url(/images/btn-bg-1.svg)] bg-cover bg-no-repeat hover:brightness-90 transition">
            LEARN MORE
          </button>
        </div>
      </div>
    </Container>
  );
};
