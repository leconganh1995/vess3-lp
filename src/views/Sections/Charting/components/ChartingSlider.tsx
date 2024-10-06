import { Card } from "@/components/Card";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CHARTING_DATA } from "../data";
import "./ChartingSlider.css";

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

interface Props {
  setActiveIndex: (index: number) => void;
}

export const ChartingSlider = ({ setActiveIndex }: Props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "38px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <Slider {...settings} afterChange={setActiveIndex}>
      {CHARTING_DATA.map((item, index) => (
        <div key={index}>
          <ChartingCard
            className="min-w-[293px] max-w-full w-full h-full"
            data={item}
          />
        </div>
      ))}
    </Slider>
  );
};

const ChartingCard = ({ data, ...props }: ChartingCardProps) => {
  return (
    <div {...props}>
      <Card className="max-w-[300px] mx-auto">
        <div className="min-h-[205px] py-4 px-6 bg-[radial-gradient(120.07%_126.88%_at_-0.15%_-0.2%,_#41B9CE_27.03%,_#364799_100%)] h-full rounded-[8px]">
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
