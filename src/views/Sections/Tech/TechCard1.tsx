/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/Card";

export const TechCard1 = () => {
  return (
    <Card className="bg-[rgba(255,255,255,0.1)] max-w-[368px] mx-auto">
      <div className="relative right-0 mb-2">
        <img
          className="w-full aspect-[1.289]"
          src="/images/broad-exposure.webp"
          alt=""
        />
        <img
          src="/images/coin.webp"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3"
          alt=""
        />
      </div>

      <div className="py-4 px-3">
        <p className="text-sm font-normal uppercase text-center">
          Broad Exposure, One Token
        </p>
        <ul className="text-xs mt-2">
          <li className="relative">
            &#9642; Provides easy exposure through a single token
          </li>
          <li>&#9642; Simplifies access to the fastest-growing DeFi sectors</li>
        </ul>
      </div>
    </Card>
  );
};
