/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/Card";

export const TechCard2 = () => {
  return (
    <Card className="bg-[rgba(255,255,255,0.1)] max-w-[368px] mx-auto">
      <div className="flex items-center right-0 mb-2 bg-[#00000099] rounded-[4p] aspect-[1.289]">
        <img className="w-full" src="/images/graph.webp" />
      </div>

      <div className="py-4 px-3">
        <p className="text-sm font-normal uppercase text-center">
          The Vessel Index
        </p>
        <ul className="text-xs mt-2">
          <li className="relative">
            &#9642; Offers a range of index baskets: DeFi, blue chip, NFT,
            gaming, and more. 
          </li>
          <li>
            &#9642; Portfolios available for all experience levels and risk
            profiles.
          </li>
        </ul>
      </div>
    </Card>
  );
};
