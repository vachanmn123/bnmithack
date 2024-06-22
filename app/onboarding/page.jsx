"use client";
import React from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import { Progress } from "@/components/ui/progress";
import FakeLoader from "./FakeLoader";

export default function OnboardingPage() {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({});

  const handleDataPost = (newData, curStep) => {
    switch (curStep) {
      case 1: {
        setData({
          ...data,
          username: newData.username,
          email: newData.email,
          phone: newData.phone,
          age: newData.age,
        });
        setStep(2);
        break;
      }
      case 2: {
        setData({
          ...data,
          otp: newData.otp,
        });
        console.log(data);
        setStep(3);
        break;
      }
      case 3: {
        setData({
          ...data,
          careerStream: newData.careerStream,
          career: newData.career,
        });
        console.log(data);
        setStep(4);
        break;
      }
      case 4: {
        console.log(data);
        window.localStorage.setItem("onboarding", "true");
        // Save this data locally somwhere
        window.localStorage.setItem("onboardingData", JSON.stringify(data));
        window.location.href = "/";
        break;
      }
    }
  };

  return (
    <div className="flex flex-col max-h-screen gap-12 mx-3 mt-16">
      <div className="w-screen fixed top-0 left-0 right-0 bg-secondary h-16 items-center justify-center flex px-4 py-5">
        <h1 className="text-2xl text-white text-center">NeoMentor</h1>
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-5">Welcome to NeoMentor</h1>
        <p className="text-gray-500">
          We are excited to have you on board. Let&apos;s get started by setting
          up your account.
        </p>
        <div className="flex flex-col gap-2 mt-5 w-full transition-height duration-200">
          {step === 1 && <Step1 dataPost={handleDataPost} />}
          {step === 2 && <Step2 dataPost={handleDataPost} data={data} />}
          {step === 3 && <Step3 dataPost={handleDataPost} data={data} />}
          {step === 4 && (
            <>
              <h2 className="text-3xl font-bold text-center">
                Welcome to NeoMentor
              </h2>
              <p className="text-gray-500 text-center mb-6">
                Give us a moment to set up your brand new NeoMentor Account!
              </p>
              <FakeLoader onComplete={handleDataPost} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
