"use client";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedLayout({ children }) {
  const path = usePathname();
  return (
    <motion.div
      key={path}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="mt-16"
    >
      {children}
    </motion.div>
  );
}
