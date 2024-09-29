/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";

import { Container, ContainerProps } from "@/components/Container";
import { Card } from "@/components/Card";

export const OurPartners = (props: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Container
      ref={containerRef}
      className="bg-[url(/images/our-partner-bg.webp)] bg-cover bg-no-repeat"
      {...props}
    >
      <div className="flex flex-col items-center mt-[50px] gap-10 max-w-content mx-auto h-full w-full relative">
        <h2 className="text-[60px] leading-[1.1]">Our Partners</h2>
        <p className="mb-20">Description demo</p>
        <Card>
          <div className="flex flex-col items-center gap-10 relative overflow-hidden backdrop-blur bg-[rgba(255,255,255,.1)] p-[57px_66px_61px] rounded-[8px]">
            <div className="bg-[#4BF7E24D] w-[64.5%] h-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full blur-[100px]" />
            <img src="/images/polygon.svg" alt="" />

            <div className="flex gap-12 justify-between items-center">
              <img src="/images/chainlink.svg" alt="" />
              <img src="/images/flooz.svg" alt="" />
              <img src="/images/bitkeep.svg" alt="" />
            </div>

            <div className="flex gap-12 justify-between items-center">
              <img src="/images/crypton.svg" alt="" />
              <img src="/images/certik.svg" alt="" />
            </div>

            <img src="/images/vess3l.svg" alt="" />
          </div>
        </Card>
      </div>
    </Container>
  );
};
