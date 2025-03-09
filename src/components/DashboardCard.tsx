import { DashboardCardProps } from "./types";

const DashboardCard = ({
  MainIcon,
  SecondaryIcon,
  title,
  count,
  percentage,
  border,
  padding,
  percentageColor,
  images,
}: DashboardCardProps) => {
  return (
    <div className={`flex gap-3 ${border} ${padding} pl-3`}>
      <MainIcon />

      <div>
        <p className="text-[14px] text-[#ACACAC]">{title}</p>

        <p className="text-3xl font-semibold text-[#333333]">{count}</p>

        {SecondaryIcon && percentage ? (
          <div className="flex items-center gap-[2px]">
            <span className="inline-block">
              <SecondaryIcon />
            </span>

            <span className={`${percentageColor} text-xs font-semibold`}>
              {percentage}{" "}
            </span>
            <span className="text-xs font-normal"> this month</span>
          </div>
        ) : (
          <div className="flex">
            {images?.map((image, index) => (
              <img
                className={`rounded-[50%] ml-[-4px] z-${index}`}
                width={26}
                height={26}
                src={image.src}
                key={index}
                alt={`image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
