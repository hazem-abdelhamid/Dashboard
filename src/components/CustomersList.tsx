import { CustomerListProps } from "./types";
import InputField from "./ui/InputField";
import SelectField from "./ui/SelectField";

const CustomersList = ({ children }: CustomerListProps) => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#ffff] mt-10 ml-9 rounded-[30px] p-4 w-full max-w-4xl mb-[4.875rem]">
        <div className="flex justify-center items-center gap-[20rem] mb-10">
          <div className="relative left-[2.188rem] flex flex-col gap-2 translate-x-[-1.125rem]">
            <h1 className="text-[1.375rem] font-semibold">All Customers</h1>
            <p className="font-normal text-sm text-[#16C098]">Active Members</p>
          </div>
          <div className="flex gap-4">
            <InputField className="bg-[#F9FBFF] placeholder:text-[12px] shadow-none" />
            <SelectField />
          </div>
        </div>
        {/* <Table /> */}
        {children}
      </div>
    </div>
  );
};

export default CustomersList;
