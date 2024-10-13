/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/Card";

export const TechMain = () => {
  return (
    <div className="lg:fixed left-1/2 top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col-reverse lg:flex-row justify-between w-full max-w-content gap-28">
      <div className="relative flex lg:block items-center justify-center gap-4 right-4 lg:right-0">
        <div className="hidden lg:flex flex-col items-center gap-[6px] absolute right-[-90px] top-10">
          <img className="w-[15px]" src="/images/tech-vector.svg" />
          <p className="text-[6.25px] opacity-30">Lorem ipsum</p>
        </div>

        <Card className="max-w-[45%] lg:max-w-[unset]">
          <img className="w-full" src="/images/broad-exposure.webp" />
          <img
            src="/images/coin.webp"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3"
          />
        </Card>

        <div className="relative">
          <div className="lg:absolute right-0 top-1/2 lg:-translate-y-1/2 lg:translate-x-1/2 mb-2 lg:mb-0">
            <div className="relative">
              <img src="/images/tech-vector.svg" />
              <img
                className="hidden lg:block absolute bottom-1/2 left-12"
                src="/images/tech-vector-3.svg"
              />
            </div>
          </div>

          <p className="text-xs font-normal lg:text-xl lg:mt-[30px] mb-[6px] max-w-28 lg:max-w-[unset]">
            Broad Exposure, One Token
          </p>
          <ul className="hidden lg:block text-right max-w-[280px] text-xs">
            <li className="relative">
              &#9642; Provides easy exposure through a single token
            </li>
            <li>
              &#9642; Simplifies access to the fastest-growing DeFi sectors
            </li>
          </ul>
        </div>
      </div>

      <div className="relative flex lg:block items-center justify-center gap-4 left-4 lg:left-0">
        <div className="hidden lg:flex flex-col items-center gap-[6px] absolute left-[-90px] bottom-10">
          <img className="w-[15px]" src="/images/tech-vector.svg" />
          <p className="text-[6.25px] opacity-30">Lorem ipsum</p>
        </div>

        <div className="flex flex-col-reverse items-end lg:block lg:mb-[30px] lg:pl-20 relative">
          <div className="lg:absolute left-0 top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 mt-1 lg:mt-0">
            <div className="relative">
              <img src="/images/tech-vector.svg" />
              <img
                className="hidden lg:block absolute top-1/2 right-12"
                src="/images/tech-vector-2.svg"
              />
            </div>
          </div>

          <p className="text-xs lg:text-xl font-normal mb-[6px] text-right lg:text-left max-w-24 lg:max-w-[unset]">
            The Vessel Index
          </p>
          <ul className="hidden lg:block max-w-[305px] text-xs [list-style-type:square] ml-2">
            <li className="relative">
              Offers a range of index baskets: DeFi, blue chip, NFT, gaming, and
              more. 
            </li>
            <li>
              Portfolios available for all experience levels and risk profiles.
            </li>
          </ul>
        </div>

        <Card className="max-w-[45%] lg:max-w-[unset]">
          <div className="flex items-center justify-center aspect-[1.304] max-w-[356px]">
            <img className="w-[87.36%]" src="/images/graph.webp" />
          </div>
        </Card>
      </div>
    </div>
  );
};
