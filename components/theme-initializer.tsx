"use client";

import { useEffect } from "react";
import { useTheme } from "./theme-provider";

export function ThemeInitializer() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.style.colorScheme = "dark";

    if (typeof document !== "undefined") {
      document.body.style.backgroundColor = "#000208";
      document.body.style.color = "#ffffff";
    }

    console.log("🎨 Tema aplicado:", theme);
  }, [theme]);

  return null;
}
