"use client";
import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-5 h-screen -mt-24 mx-5">
      <h1 className="text-3xl font-bold">Hello! You seem to be lost.</h1>
      <Link href="/">
        <button className="bg-accent text-black px-3 py-3 rounded-lg text-xl">
          Go back home
        </button>
      </Link>
    </div>
  );
}
