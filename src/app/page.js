"use client";

import { Footers } from "@/components";
import { Headers } from "@/components/Header";
import { AllSet } from "@/components/steps/AllSet";
import { Step1 } from "@/components/steps/Step1";
import { Step2 } from "@/components/steps/Step2";
import { Step3 } from "@/components/steps/Step3";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  //////////
  const [stepCount, setStepCount] = useState(0);
  const [formValues, setFormvalues] = useState(initialFormValues);

  const handleNextStep = (event) => {
    event.preventDefault();

    if (stepCount >= 3) {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormvalues((previousValues) => ({ ...previousValues, [name]: value }));
  };
  console.log(formValues);

  ////////////
  const CurrentStep = [Step1, Step2, Step3, AllSet][stepCount];

  return (
    <div className=" flex justify-center items-center h-screen w-screen">
      {stepCount === 3 && <AllSet />}
      <div
        className="bg-[#FFF] w-[480px] h-[655px] px-8 py-8 rounded-[8px] flex items-center justify-between  flex-col"
        style={{ display: stepCount === 3 ? "none" : "flex" }}
      >
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
        <Footers
          alhamToo={stepCount + 1}
          blackButtom={handleNextStep}
          whiteButtom={handlePreviousStep}
        />
      </div>
    </div>
  );
}
