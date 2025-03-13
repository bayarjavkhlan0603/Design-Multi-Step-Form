"use client";

import { Footers } from "@/components";
import { Headers } from "@/components/Header";
import { Step1 } from "@/steps/Step1";
import { Step2 } from "@/steps/Step2";
import { Step3 } from "@/steps/Step3";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  //////////
  const [stepCount, setStepCount] = useState(0);

  const handleNextStep = (event) => {
    event.preventDefault();

    if (stepCount >= 2) {
      return;
    }

    setStepCount(stepCount + 1);
  };
  const handlePreviousStep = () => {
    if (stepCount <= 0) {
      return;
    }
    setStepCount(stepCount - 1);
  };

  const handleInputChange = (event) => {};

  ////////////
  const CurrentStep = [Step1, Step2, Step3][stepCount];

  return (
    <div className=" flex justify-center items-center h-screen w-screen">
      <div className="bg-[#FFF] w-[480px] h-[655px] px-8 py-8 flex items-center  flex-col">
        <div className="w-full">
          {" "}
          <Headers />
          <CurrentStep
            handleSubmit={handleNextStep}
            stepCount={stepCount + 1}
            handleInput={handleInputChange}
            handlePreviousStep={handlePreviousStep}
          />
        </div>
      </div>
    </div>
  );
}
