import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SelectField = () => {
  // text-[#7E7E7E] text-xs
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <span className="flex items-center gap-1 text-xs">
          <span className="text-[#7E7E7E]">Short by :</span>
          <span className="text-black font-semibold">
            <SelectValue placeholder=" Newest" />
          </span>
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectField;
