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
      className=" flex flex-col justify-between h-[82%] gap-3"
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          label={"Email"}
          name={"email"}
          placeholder={"Typing..."}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
        <Input
          type={"number"}
          label={"Phone number"}
          name={"phoneNumber"}
          placeholder={"Typing..."}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
        <Input
          type={"password"}
          label={"Password"}
          name={"password"}
          placeholder={"Typing..."}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
        <Input
          type={"password"}
          label={"Confirm password"}
          name={"confirmPassword"}
          placeholder={"Typing..."}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
      </div>
    </form>
  );
};
