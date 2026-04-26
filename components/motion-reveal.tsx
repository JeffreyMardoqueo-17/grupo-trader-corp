"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function MotionReveal({ children, className, delayMs = 0 }: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={["reveal-block", isVisible ? "is-visible" : "", className ?? ""].join(" ").trim()}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
