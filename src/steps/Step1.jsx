import { Footers, Input } from "@/components";
import React from "react";

export const Step1 = ({ handleSubmit, stepCount, handleInput }) => {
  return (
    <form
      className="pt-7 flex flex-col justify-between h-full"
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          label={"First name"}
          name={"firstname"}
          placeholder={"First name"}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
        <Input
          label={"Last name"}
          name={"lastname"}
          placeholder={"Last name"}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
        <Input
          label={"Username"}
          name={"username"}
          placeholder={"Username"}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
      </div>

      <Footers alhamToo={stepCount} blackButtom={handleSubmit} />
    </form>
  );
};
