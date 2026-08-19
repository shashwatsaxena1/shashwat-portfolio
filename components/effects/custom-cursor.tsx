"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 450, damping: 36 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 36 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setVisible(true);
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-4 w-4 rounded-full bg-primary mix-blend-difference md:block"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[89] hidden h-11 w-11 rounded-full border border-primary/50 md:block"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
      />
    </>
  );
}
