const PaginationBtns = () => {
  const btns = ["1", "2", "3", "4", "...", "40"];
  return (
    <div className="flex items-center justify-between mt-8 mb-9 mr-1">
      <p className="text-sm text-[#B5B7C0] font-medium ml-5">
        Showing data 1 to 8 of 256K entries
      </p>
      <div className="flex gap-1 text-[#404B52] text-xs">
        <button className="border border-[#EEEEEE] bg-[#F5F5F5] py-[0.375rem] px-[0.563rem] rounded hover:text-white hover:bg-[#5932EA]">
          &lt;
        </button>
        {btns.map((btn, index) => (
          <button
            key={index}
            className="border border-[#EEEEEE] bg-[#F5F5F5] py-[0.375rem] px-[0.563rem] rounded hover:text-white hover:bg-[#5932EA]"
          >
            {btn}
          </button>
        ))}
        <button className="border border-[#EEEEEE] bg-[#F5F5F5] py-[0.375rem] px-[0.563rem] rounded hover:text-white hover:bg-[#5932EA]">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PaginationBtns;
