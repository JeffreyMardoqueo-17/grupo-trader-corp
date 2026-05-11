"use client";

import * as React from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

const themeValue: ThemeContextValue = {
  theme: "dark",
  resolvedTheme: "dark",
  setTheme: () => {},
};

export function ThemeProvider({ children }: React.PropsWithChildren) {
  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  return context ?? themeValue;
}