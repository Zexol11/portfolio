"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function Cursor() {
  const [isMounted, setIsMounted] = useState(false);

  // Instant position values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    setIsMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] w-[400px] h-[400px] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      style={{
        x: cursorX,
        y: cursorY,
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59,130,246,0) 70%)",
      }}
    />
  );
}
