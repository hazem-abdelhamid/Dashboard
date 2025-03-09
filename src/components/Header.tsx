import InputField from "./ui/InputField";

const Header = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row items-center mt-6 md:mt-[25px] gap-6 md:gap-[500px] px-4">
      <h1 className="text-[24px] ml-[50px] font-medium translate-x-2">
        Hello Evano 👋🏼,
      </h1>
      <InputField className="mr-5" />
    </div>
  );
};

export default Header;
