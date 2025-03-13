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
      className="flex flex-col justify-between h-full gap-3"
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          label={"Date of birth"}
          name={"firstname"}
          type={"date"}
          placeholder={"enter first name"}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
      </div>
      <Footers
        alhamToo={stepCount}
        blackButtom={handlePreviousStep}
        whiteButtom={handlePreviousStep}
      />
    </form>
  );
};
