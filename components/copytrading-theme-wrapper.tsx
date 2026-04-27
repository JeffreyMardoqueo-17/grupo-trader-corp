"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function CopyTradingThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const previousTheme = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (theme) {
      previousTheme.current = theme;
    }
    setTheme("dark");

    return () => {
      if (previousTheme.current) {
        setTheme(previousTheme.current);
      }
    };
  }, []);

  return <>{children}</>;
}
