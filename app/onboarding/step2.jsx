"use client";
import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Step2({ dataPost, data }) {
  const [submitting, setSubmitting] = React.useState(false);
  return (
    <div className="flex flex-col gap-5 w-full items-center justify-center">
      <div className="flex flex-col gap-1 w-full items-center">
        <h2 className="text-3xl font-bold text-center">OTP Verification</h2>
        <p className="text-gray-500 text-center mb-6">
          We have sent an OTP to your phone number. Please enter the OTP below
        </p>
        <InputOTP maxLength={6} name="otp" id="otp" className="text-white">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <button
        disabled={submitting}
        className="bg-accent text-black p-2 rounded-lg mt-2 w-full disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200"
        onClick={() => {
          setSubmitting(true);
          setTimeout(() => {
            dataPost(
              {
                otp: document.getElementById("otp").value,
              },
              2
            );
          }, 1000);
        }}
      >
        {submitting ? "Verifying..." : "Verify"}
      </button>
    </div>
  );
}
