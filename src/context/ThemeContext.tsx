import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemePreference = Theme | 'system';

interface ThemeContextType {
  theme: Theme;
  themePreference: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themePreference, setThemePreference] = useState<ThemePreference>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as ThemePreference;
      if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
    }
    return 'system';
  });

  const getSystemTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setResolvedTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    return themePreference === 'system' ? getSystemTheme() : themePreference;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const resolvedTheme = themePreference === 'system'
        ? (mediaQuery.matches ? 'dark' : 'light')
        : themePreference;

      setResolvedTheme(resolvedTheme);
      root.classList.toggle('dark', resolvedTheme === 'dark');
      root.style.colorScheme = resolvedTheme;
    };

    applyTheme();
    localStorage.setItem('theme', themePreference);

    if (themePreference !== 'system') {
      return undefined;
    }

    mediaQuery.addEventListener('change', applyTheme);
    return () => mediaQuery.removeEventListener('change', applyTheme);
  }, [themePreference]);

  const toggleTheme = () => {
    setThemePreference(theme === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newTheme: ThemePreference) => {
    setThemePreference(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themePreference, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
