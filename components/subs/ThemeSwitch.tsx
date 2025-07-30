"use client";
import { ThemeSwitcher } from "@/components/ui/kibo-ui/theme-switcher";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();

  return (
    <ThemeSwitcher
      defaultValue="system"
      className="bg-transparent"
      onChange={setTheme}
      value={theme ? (theme as "light" | "dark" | "system") : "system"}
    />
  );
};

export default ThemeSwitch;
