import DashboardCard from "./DashboardCard";
import CustomerIcon from "./ui/CustomerIcon";
import CustomersIcon from "./ui/CustomersIcon";
import RedDownIcon from "./ui/RedDownIcon";
import ScreenIcon from "./ui/ScreenIcon";
import UpIcon from "./ui/UpIcon";
import image1 from "../app/Images/image-1.png";
import image2 from "../app/Images/image-2.png";
import image3 from "../app/Images/image-3.png";
import image4 from "../app/Images/image-4.png";
import image5 from "../app/Images/image-5.png";

const StatsPanel = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-9 items-center justify-center h-[151px] bg-[#ffff] mt-10 rounded-[30px] p-9 pl-10 pr-8 ml-9 shadow-custom-shadow w-full max-w-4xl">
        {/* Start of div */}
        <DashboardCard
          MainIcon={CustomersIcon}
          SecondaryIcon={UpIcon}
          title="Total customers"
          count="5,423"
          percentage="16%"
          border="border-r-2"
          padding="pr-10"
          percentageColor="text-[#00AC4F]"
        />
        <DashboardCard
          MainIcon={CustomerIcon}
          SecondaryIcon={RedDownIcon}
          title="Members"
          count="1,893"
          percentage="1%"
          border="border-r-2"
          padding="pr-10"
          percentageColor="text-[#D0004B]"
        />
        <DashboardCard
          MainIcon={ScreenIcon}
          title="Active now"
          count="189"
          padding="pr-5"
          images={[image1, image2, image3, image4, image5]}
        />
      </div>
    </div>
  );
};

export default StatsPanel;
