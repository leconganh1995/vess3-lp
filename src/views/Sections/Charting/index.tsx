/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";

import { Container, ContainerProps } from "@/components/Container";
import { TextGradient } from "@/components/TextGradient";
import { CHARTING_DATA } from "./data";
import { Card } from "@/components/Card";
import clsx from "clsx";

interface ChartingCardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  data: {
    time: string;
    contents: (
      | {
          name: string;
          subContents?: undefined;
        }
      | {
          name: string;
          subContents: string[];
        }
    )[];
  };
}

export const Charting = (props: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container ref={containerRef} {...props}>
      <div className="mt-8 flex justify-between max-w-content mx-auto h-full w-full relative">
        <div className="flex flex-col gap-8 items-start">
          <TextGradient className="font-bold">ABOUT US</TextGradient>
          <h2 className="text-[60px] max-w-[500px] leading-[1.1]">
            CHARTING YOUR COURSE
          </h2>
          <p className="max-w-[400px]">
            Description demo demo description demo
          </p>
        </div>

        <div className="relative flex-1 flex items-center justify-center right-0 top-1/2 -translate-y-1/2">
          <div className="relative">
            <img
              src="/images/charting-vector-2.webp"
              className={clsx(
                "w-[300px] transition absolute top-0 -translate-y-1/2 -translate-x-[30%]",
                activeIndex === 0 ? "brightness-100" : "brightness-50"
              )}
              alt=""
            />

            <img
              src="/images/charting-vector-2.webp"
              className={clsx(
                "w-[300px] transition absolute top-1/2 -translate-y-1/2 -translate-x-1/2",
                activeIndex === 1 ? "brightness-100" : "brightness-50"
              )}
              alt=""
            />

            <img
              src="/images/charting-vector-2.webp"
              className={clsx(
                "w-[300px] transition absolute bottom-0 translate-y-1/2 -translate-x-[30%]",
                activeIndex === 2 ? "brightness-100" : "brightness-50"
              )}
              alt=""
            />

            <img
              src="/images/charting-vector.svg"
              className="w-[74.5px]"
              alt=""
            />

            <ChartingCard
              className="absolute w-max cursor-pointer top-0 -translate-y-1/2 translate-x-[40%]"
              data={CHARTING_DATA[0]}
              onClick={() => setActiveIndex(0)}
            />

            <ChartingCard
              className="absolute w-max cursor-pointer top-1/2 -translate-y-1/3 -translate-x-[120%]"
              data={CHARTING_DATA[1]}
              onClick={() => setActiveIndex(1)}
            />

            <ChartingCard
              className="absolute w-max cursor-pointer bottom-0 translate-y-1/2 translate-x-[40%]"
              data={CHARTING_DATA[2]}
              onClick={() => setActiveIndex(2)}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

const ChartingCard = ({ data, ...props }: ChartingCardProps) => {
  return (
    <div {...props}>
      <Card className="max-w-[290px]">
        <div className="min-h-[215px] py-4 px-6 bg-[radial-gradient(120.07%_126.88%_at_-0.15%_-0.2%,_#41B9CE_27.03%,_#364799_100%)] h-full rounded-[8px]">
          <p className="text-lg mb-3">{data.time}</p>

          <ul className="[list-style-type:square] pl-4 text-[10px]">
            {data.contents.map((item, index) => (
              <li key={index}>
                {item.name}
                {item.subContents && (
                  <ul className="[list-style-type:'-'] pl-2">
                    {item.subContents.map((c, idx) => (
                      <li key={`subitem-${idx}`}>
                        <span className="ml-2">{c}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};
