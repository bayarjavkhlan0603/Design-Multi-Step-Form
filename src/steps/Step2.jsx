import { Footers, Input } from "@/components";
import React from "react";

export const Step2 = ({
  handleSubmit,
  stepCount,
  handleInput,
  handlePreviousStep,
}) => {
  return (
    <form
      className=" flex flex-col justify-between h-full gap-3"
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          label={"Email"}
          name={"firstname"}
          placeholder={"Typing..."}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
        <Input
          label={"Phone number"}
          name={"firstname"}
          placeholder={"Typing..."}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
        <Input
          label={"Password"}
          name={"firstname"}
          placeholder={"Typing..."}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
        <Input
          label={"Confirm password"}
          name={"firstname"}
          placeholder={"Typing..."}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
      </div>
      <Footers alhamToo={stepCount} />
    </form>
  );
};
