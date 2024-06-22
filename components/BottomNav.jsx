"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoBookOutline,
  IoHomeOutline,
  IoPersonCircleOutline,
  IoSearchOutline,
} from "react-icons/io5";

export default function BottomNav() {
  const route = usePathname();
  if (route === "/login" || route === "/register" || route === "/onboarding")
    return null;

  return (
    <div className="flex justify-between items-center bg-secondary fixed bottom-0 left-0 right-0 w-screen px-5 py-7">
      <Link href="/">
        <IoHomeOutline
          className={`text-3xl ${route === "/" ? "text-accent" : "text-white"}`}
        />
      </Link>
      <Link href="/courses">
        <IoBookOutline
          className={`text-3xl ${
            route === "/courses" ? "text-accent" : "text-white"
          }`}
        />
      </Link>
      <Link href="/search">
        <IoSearchOutline
          className={`text-3xl ${
            route === "/search" ? "text-accent" : "text-white"
          }`}
        />
      </Link>
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
