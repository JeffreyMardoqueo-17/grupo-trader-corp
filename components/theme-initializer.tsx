"use client";

import { useEffect } from "react";
import { useTheme } from "./theme-provider";

export function ThemeInitializer() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";

    if (typeof document !== "undefined") {
      document.body.style.backgroundColor = isDark ? "#000208" : "#ffffff";
      document.body.style.color = isDark ? "#ffffff" : "#000418";
    }

    console.log("🎨 Tema aplicado:", theme);
  }, [theme]);

  return null;
}
