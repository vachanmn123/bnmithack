"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import React, { useEffect } from "react";

export default function LoginPage() {
  const [phone, setPhone] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [step, setStep] = React.useState(1);
  const [submitting, setSubmitting] = React.useState(false);

  useEffect(() => {
    if (step === 3) {
      setSubmitting(true);
      setTimeout(() => {
        console.log("Logging in with phone:", phone, "and OTP:", otp);
        window.localStorage.setItem("login", "true");
        window.location.href = "/";
        setSubmitting(false);
      }, 1000);
    }
  }, [step, phone, otp]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 mx-12">
      <div className="w-screen fixed top-0 left-0 right-0 bg-secondary h-16 items-center justify-center flex px-4 py-5">
        <h1 className="text-2xl text-white text-center">NeoMentor</h1>
      </div>
      <h1 className="text-4xl font-bold">Login</h1>
      {step === 1 && (
        <>
          <label htmlFor="phone" className="text-lg text-center">
            Enter your phone number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="border-2 border-gray-400 rounded-lg p-2 mt-2 w-full text-black"
          />
        </>
      )}
      {(step === 2 || step === 3) && (
        <>
          <label htmlFor="otp" className="text-lg text-center">
            Enter the OTP sent to your phone
          </label>
          <InputOTP
            maxLength={6}
            name="otp"
            id="otp"
            onChange={(val) => setOtp(val)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </>
      )}
      <p className="text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/onboarding" className="text-secondary text-lg">
          Sign up Now
        </Link>
      </p>
      <button
        className="bg-accent text-black p-2 rounded-lg mt-2 w-full"
        onClick={() => {
          step === 1 ? setStep(2) : setStep(3);
        }}
      >
        {step === 1 ? "Get OTP" : step === 3 ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}
