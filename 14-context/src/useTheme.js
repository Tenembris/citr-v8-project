import { useState, useEffect } from "react";

const setThemeFromLocal = () => {
  const localTheme = localStorage.getItem("theme");

  if (localTheme) {
    return localTheme;
  } else {
    return "light";
  }
};

export const useTheme = () => {
  const [theme, setTheme] = useState(setThemeFromLocal()); // Set initial theme from local storage

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark"); // Update local storage with new theme
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light"); // Update local storage with new theme
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return { theme, toggleTheme };
};

export default setThemeFromLocal;
