/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";

import { Button } from "@/components/Button";
import { Container, ContainerProps } from "@/components/Container";
import { TextGradient } from "@/components/TextGradient";
import { GOVERNANCE_DATA } from "./data";
import { GovernanceItem } from "./components/GovernanceItem";

export const Governance = (props: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Container ref={containerRef} {...props}>
      <div className="flex items-center justify-between max-w-content mx-auto h-full w-full relative">
        <div className="max-w-content flex flex-col gap-8 items-start">
          <TextGradient className="font-bold">ABOUT US</TextGradient>
          <h2 className="text-[60px] max-w-[555px] leading-[1.1]">
            VESSEL INDEX GOVERNANCE
          </h2>
          <p className="max-w-[400px]">
            The Vessel Index is designed to access diversified crypto portfolios
            with only One token: $VESSEL
          </p>
          <Button>LEARN MORE</Button>
        </div>

        <div className="grid grid-cols-2 gap-10 w-[48.4375%]">
          {GOVERNANCE_DATA.map((item, index) => (
            <GovernanceItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};
