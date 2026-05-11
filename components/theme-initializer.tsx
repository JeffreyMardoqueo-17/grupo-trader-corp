"use client";

import { useEffect } from "react";
import { useTheme } from "./theme-provider";

export function ThemeInitializer() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", resolvedTheme === "dark");
    root.style.colorScheme = resolvedTheme;

    document.body.style.backgroundColor = "#000208";
    document.body.style.color = resolvedTheme === "dark" ? "#ffffff" : "#0b1020";
  }, [resolvedTheme]);

  return null;
}
