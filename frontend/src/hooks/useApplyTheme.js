import React from 'react';
import { useThemeStore } from '../store/useThemeStore';

// Universal hook to apply theme - use this in any component that needs theme
export const useApplyTheme = () => {
  const { theme } = useThemeStore();

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return theme;
};