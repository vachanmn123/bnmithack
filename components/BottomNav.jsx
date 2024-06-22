"use client";
import Link from "next/link";
import React from "react";
import { IoHomeOutline, IoPersonCircleOutline } from "react-icons/io5";

export default function BottomNav() {
  const route = window.location.pathname;

  if (route === "/login" || route === "/register" || route === "/onboarding")
    return null;

  return (
    <div className="flex justify-between items-center bg-secondary fixed bottom-0 left-0 right-0 w-screen px-5 py-7">
      <Link href="/">
        <IoHomeOutline
          className={`text-3xl ${route === "/" ? "text-accent" : "text-white"}`}
        />
      </Link>
      <IoHomeOutline className="text-3xl text-white" />
      <Link href="/profile">
        <IoPersonCircleOutline
          className={`text-3xl ${
            route === "/profile" ? "text-accent" : "text-white"
          }`}
        />
      </Link>
    </div>
  );
}
