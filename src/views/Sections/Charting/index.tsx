/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";

import { Container, ContainerProps } from "@/components/Container";
import { TextGradient } from "@/components/TextGradient";
import { CHARTING_DATA } from "./data";
import { Card } from "@/components/Card";
import clsx from "clsx";
import { ChartingSlider } from "./components/ChartingSlider";

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
    <Container ref={containerRef} innerClassName="md:p-6" {...props}>
      <div className="flex flex-col xl:flex-row xl:justify-between max-w-content mx-auto h-full w-full relative">
        <div className="flex flex-col gap-8 items-start mt-4 md:mt-0">
          <TextGradient className="hidden md:block font-bold">
            ABOUT US
          </TextGradient>
          <h2 className="text-[40px] md:text-[60px] font-normal text-center md:text-left max-w-[500px] leading-[1.1]">
            CHARTING YOUR COURSE
          </h2>
          <p className="max-w-[400px] hidden md:block">
            Description demo demo description demo
          </p>
        </div>

        <div className="md:hidden mt-10">
          <ChartingSlider setActiveIndex={setActiveIndex} />
        </div>

        <div className="relative flex-1 flex items-center justify-center md:right-0 md:top-1/3 lg:top1/2 md:-translate-y-1/2 mt-12">
          <div className="flex gap-6 relative w-full h-full md:w-[unset] md:h-[unset]">
            <div className="absolute md:static rotate-90 md:rotate-0 scale-50 md:scale-100 -bottom-[80px] left-1/2 -translate-x-1/2 md:translate-x-0">
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
            </div>

            <ChartingCard
              className="hidden md:block md:absolute cursor-pointer top-0 md:-translate-y-1/2 md:translate-x-[40%] min-w-[293px] w-[293px] md:w-max"
              data={CHARTING_DATA[0]}
              onClick={() => setActiveIndex(0)}
            />

            <ChartingCard
              className="hidden md:block md:absolute cursor-pointer top-1/2 md:-translate-y-1/3 md:-translate-x-[120%] min-w-[293px] w-[293px] md:w-max"
              data={CHARTING_DATA[1]}
              onClick={() => setActiveIndex(1)}
            />

            <ChartingCard
              className="hidden md:block md:absolute cursor-pointer bottom-0 md:translate-y-1/2 md:translate-x-[40%] min-w-[293px] w-[293px] md:w-max"
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
        <div className="min-h-[160px] py-4 px-6 bg-[radial-gradient(120.07%_126.88%_at_-0.15%_-0.2%,_#41B9CE_27.03%,_#364799_100%)] h-full rounded-[8px]">
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
