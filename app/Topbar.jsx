"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowRoundBack, IoIosHelpCircleOutline } from "react-icons/io";
import Link from "next/link";

export default function Topbar() {
  const path = usePathname();
  const router = useRouter();
  const hasBack = () => {
    if (path === "/") return false;
    return true;
  };
  return (
    <div className="w-screen md:max-w-screen-sm fixed top-0 left-0 right-0 bg-secondary h-16 items-center justify-center flex px-4 py-5 z-20 transition-all">
      {hasBack() && (
        <IoIosArrowRoundBack
          className="text-white text-4xl absolute left-2 my-auto cursor-pointer transition-all"
          onClick={() => router.back()}
        />
      )}
      <h1 className="text-2xl text-white text-center">NeoMentor</h1>
      <Link
        href="/support"
        className="text-white text-4xl absolute right-2 my-auto cursor-pointer"
      >
        <IoIosHelpCircleOutline />
      </Link>
    </div>
  );
}
