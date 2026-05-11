"use client";

import { useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

export function CopyTradingThemeWrapper({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return <>{children}</>;
}
