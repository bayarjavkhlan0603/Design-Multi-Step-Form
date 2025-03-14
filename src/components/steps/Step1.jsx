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
          name={"firstName"}
          placeholder={"First name"}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
        <Input
          label={"Last name"}
          name={"lastName"}
          placeholder={"Last name"}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
        <Input
          label={"Username"}
          name={"userName"}
          placeholder={"Username"}
          isError={true}
          errorMSG={""}
          handleInput={handleInput}
        />
      </div>
    </form>
  );
};
