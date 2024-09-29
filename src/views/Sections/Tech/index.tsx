/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";

import { Container, ContainerProps } from "@/components/Container";
import { Card } from "@/components/Card";

export const Tech = (props: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Container ref={containerRef} {...props}>
      <div className="flex flex-col items-center mt-[50px] gap-10 max-w-content mx-auto h-full w-full relative">
        <h2 className="text-[60px] leading-[1.1]">The Tech Behind It All</h2>
        <p>Description demo</p>
        <div className="flex justify-between w-full">
          <div className="relative">
            <div className="flex flex-col items-center gap-[6px] absolute right-[-90px] top-10">
              <img className="w-[15px]" src="/images/tech-vector.svg" />
              <p className="text-[6.25px] opacity-30">Lorem ipsum</p>
            </div>

            <Card>
              <img src="/images/broad-exposure.webp" />
              <img
                src="/images/coin.webp"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3"
              />
            </Card>

            <div className="relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                <div className="relative">
                  <img src="/images/tech-vector.svg" />
                  <img
                    className="absolute bottom-1/2 left-12"
                    src="/images/tech-vector-3.svg"
                  />
                </div>
              </div>

              <p className="text-xl mt-[30px] mb-[6px]">
                Broad Exposure, One Token
              </p>
              <ul className="text-right max-w-[280px] text-xs">
                <li className="relative">
                  &#9642; Provides easy exposure through a single token
                </li>
                <li>
                  &#9642; Simplifies access to the fastest-growing DeFi sectors
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="flex flex-col items-center gap-[6px] absolute left-[-90px] bottom-10">
              <img className="w-[15px]" src="/images/tech-vector.svg" />
              <p className="text-[6.25px] opacity-30">Lorem ipsum</p>
            </div>

            <div className="mb-[30px] pl-20 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="relative">
                  <img src="/images/tech-vector.svg" />
                  <img
                    className="absolute top-1/2 right-12"
                    src="/images/tech-vector-2.svg"
                  />
                </div>
              </div>

              <p className="text-xl  mb-[6px]">The Vessel Index</p>
              <ul className="max-w-[305px] text-xs [list-style-type:square] ml-2">
                <li className="relative">
                  Offers a range of index baskets: DeFi, blue chip, NFT, gaming,
                  and more. 
                </li>
                <li>
                  Portfolios available for all experience levels and risk
                  profiles.
                </li>
              </ul>
            </div>

            <Card>
              <div className="flex items-center justify-center aspect-[1.304] max-w-[356px]">
                <img className="w-[87.36%]" src="/images/graph.webp" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};
