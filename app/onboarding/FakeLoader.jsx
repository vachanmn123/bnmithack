"use client";
import React, { useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const messages = [
  "Setting up your account",
  "Creating your profile",
  "Setting up your preferences",
  "Almost done",
  "Redirecting to your dashboard",
];

export default function FakeLoader({ onComplete }) {
  const [step, setStep] = React.useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev === 6 ? 1 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (step === 6) {
      onComplete({}, 4);
    }
  }, [step, onComplete]);
  return (
    <div className="flex flex-col w-full gap-2 items-center justify-center">
      <Progress value={(step / 5) * 100} />
      <p className="text-xl mt-5 text-center w-full text-accent transition-all duration-200">
        {messages[step - 1]}
      </p>
    </div>
  );
}
