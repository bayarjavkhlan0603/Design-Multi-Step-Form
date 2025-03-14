import { FaImages } from "react-icons/fa";

import { Footers, Input } from "@/components";
import React from "react";

export const Step3 = ({
  handleSubmit,
  stepCount,
  handleInput,
  handlePreviousStep,
}) => {
  return (
    <form
      className="pt-7 flex flex-col justify-between h-full gap-3"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-3">
        <Input
          label={"Date of birth"}
          name={"firstname"}
          type={"date"}
          placeholder={"enter first name"}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
        <div className="flex flex-col gap-3">
          <p className="text-[#334155] text-[14px]">Profile image</p>
          <div className="h-[180px] w-full bg-[#7F7F800D] rounded-md">
            <label
              className="flex flex-col gap-2 justify-center items-center h-full text-black text-[14px]"
              htmlFor="file"
            >
              <FaImages />
              Add image
            </label>
            <input className="hidden" type="file" name="" id="file" />
          </div>
        </div>
      </div>
    </form>
  );
};
