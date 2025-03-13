import { DiCssTricks } from "react-icons/di";

export const Input = ({
  label,
  name,
  type,
  isError,
  placeholder,
  errorMSG,
  handleInput,
}) => {
  return (
    <div className="w-full text-black flex flex-col">
      <div className="flex flex-col gap-2">
        <p className="text-[14px] text-[#334155] flex">
          {label}
          <DiCssTricks className="text-[#E14942]" />
        </p>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="p-3 w-full rounded-[8px] border border-[#CBD5E1] text-[16px]"
          onChange={handleInput}
        />
      </div>
      {isError && <p className="text-red-600">{errorMSG}</p>}
    </div>
  );
};
