import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
export const Footers = ({ alhamToo, whiteButtom, blackButtom }) => {
  return (
    <div className="w-full flex items-center gap-2">
      {alhamToo > 1 && (
        <button
          className=" rounded-[6px] border border-[#CBD5E1] text-black flex justify-center items-center gap-1 h-full w-32"
          onClick={whiteButtom}
        >
          <FaAngleLeft />
          Back
        </button>
      )}
      <button
        className="px-[10px] py-3 bg-[#121316] rounded-[6px] w-full flex justify-center items-center gap-1"
        onClick={blackButtom}
        type="submit"
      >
        Continue {alhamToo}/3
        <FaAngleRight />
      </button>
    </div>
  );
};
