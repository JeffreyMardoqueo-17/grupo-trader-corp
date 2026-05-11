"use client";

import * as React from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = React.PropsWithChildren<{
  defaultTheme?: Theme;
}>;

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children, defaultTheme = "dark" }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>("dark");

  const handleSetTheme = React.useCallback((newTheme: Theme) => {
    const nextTheme = newTheme === "dark" ? "dark" : "dark";
    window.localStorage.setItem("theme", nextTheme);
  }, []);

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      theme: "dark",
      resolvedTheme: "dark",
      setTheme: handleSetTheme,
    }),
    [handleSetTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    return {
      theme: "dark" as Theme,
      resolvedTheme: "dark" as Theme,
      setTheme: (_theme: Theme) => {},
    };
  }

  return context;
}