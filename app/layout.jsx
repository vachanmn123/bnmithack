import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "./BottomNav";
import Topbar from "./Topbar";
import AnimatedLayout from "./AnimatedLayout";

const inter = Inter({ subsets: ["latin"] });

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "NeoMentor",
  description: "NeoMentor - Charting New Paths, Together",
  icons: {
    icon: "/images/icon-512x512.png",
    apple: "/images/icon-192x192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <body className={inter.className + " md:max-w-screen-sm mx-auto"}>
        <Topbar />
        <AnimatedLayout>{children}</AnimatedLayout>
        <BottomNav />
      </body>
    </html>
  );
}
