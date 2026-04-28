"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

export function CopyTradingThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const previousTheme = useRef<"light" | "dark" | undefined>(undefined);

  useEffect(() => {
    if (theme === "light" || theme === "dark") {
      previousTheme.current = theme;
    }
    setTheme("dark");

    return () => {
      if (previousTheme.current === "light" || previousTheme.current === "dark") {
        setTheme(previousTheme.current);
      }
    };
  }, [setTheme, theme]);

  return <>{children}</>;
}
