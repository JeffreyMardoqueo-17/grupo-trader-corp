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
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    console.log("📦 localStorage theme:", storedTheme);
    console.log("🎭 Default theme:", defaultTheme);
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    } else {
      setTheme(defaultTheme);
    }
    setMounted(true);
  }, [defaultTheme]);

  const handleSetTheme = React.useCallback((newTheme: Theme) => {
    console.log("✨ Cambiando tema a:", newTheme);
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  }, []);

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      theme: mounted ? theme : defaultTheme,
      resolvedTheme: mounted ? theme : defaultTheme,
      setTheme: handleSetTheme,
    }),
    [theme, mounted, defaultTheme, handleSetTheme]
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