"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface PointerProps {
  children?: React.ReactNode;
  className?: string;
  name?: string;
}

export function Pointer({ children, className, name }: PointerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    container.style.position = "relative";
    container.style.overflow = "hidden";

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsInside(true);
    const handleMouseLeave = () => setIsInside(false);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-50">
      <AnimatePresence>
        {isInside && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
            className="absolute top-0 left-0"
            style={{
              x: position.x,
              y: position.y,
              pointerEvents: "none",
            }}
          >
            {children || (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className || "fill-brand-600"}
              >
                <path d="M3.672 0.872L19.128 8.044C19.808 8.356 19.808 9.316 19.128 9.628L12.26 12.768L9.12 19.636C8.808 20.316 7.848 20.316 7.536 19.636L0.364 4.18C0.0879998 3.572 0.664 2.996 1.272 3.272L3.672 0.872Z" />
              </svg>
            )}
            {name && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="ml-4 mt-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-medium text-white whitespace-nowrap shadow-lg"
              >
                {name}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
