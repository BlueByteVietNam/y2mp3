import { useTheme } from "@/contexts/ThemeContext";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as "light" | "dark" | "system");
  };

  return (
    <select 
      value={theme} 
      onChange={handleChange}
      aria-label="Theme selector"
      className="theme-toggle"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};