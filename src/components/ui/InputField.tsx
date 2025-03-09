import { Input } from "@/components/ui/input";
import SearchIcon from "@/components/ui/SearchIcon";
import { InputFieldProps } from "../types";

const InputField = ({ className }: InputFieldProps) => {
  return (
    <div className="relative w-full md:w-auto">
      {/* Input field */}
      <Input
        className={`bg-[#ffff] w-full md:w-[216px] pl-[35px] placeholder:pl-2 ${className}`}
        placeholder="Search"
      />
      {/* Search Icon */}
      <button className="absolute left-[10px] top-[50%] -translate-y-[50%]">
        <SearchIcon />
      </button>
    </div>
  );
};

export default InputField;
