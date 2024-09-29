/* eslint-disable @next/next/no-img-element */
interface Props {
  item: {
    image: string;
    name: string;
  };
  index: number;
}

export const GovernanceItem = ({ item, index }: Props) => {
  return (
    <div className="border-[0.5px] border-[rgba(255,255,255,0.5)] rounded-[7px] p-2">
      <div className="border-[0.5px] border-[rgba(255,255,255,0.5)] rounded-[7px] p-0.5 backdrop-blur-[30px] bg-[rgba(0,0,0,0.1)]">
        <img
          src={item.image}
          alt=""
          className="w-full aspect-[1.3414] object-cover rounded-[2px]"
        />

        <div className="p-2 flex items-center gap-4">
          <div className="w-[35px] h-[35px] border-[0.5px] border-[rgba(255,255,255,0.5)] rounded-[2px] flex items-center justify-center font-2xl text-primary">
            {index + 1}
          </div>
          <p className="text-sm">{item.name}</p>
        </div>
      </div>
    </div>
  );
};
