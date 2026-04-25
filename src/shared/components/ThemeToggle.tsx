import { useTheme } from "../../app/providers/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      title={isDark ? "Tema oscuro" : "Tema claro"}
      className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
        isDark
          ? "border-amber-300/60 bg-linear-to-br from-amber-100 via-orange-100 to-amber-200"
          : "border-(--border-subtle) bg-linear-to-br from-(--bg-elevated) to-(--bg-secondary)"
      }`}
    >
      {isDark ? (
        <FaSun
          size={16}
          className="text-amber-500 drop-shadow-[0_1px_2px_rgba(245,158,11,0.45)] transition group-hover:scale-110"
        />
      ) : (
        <FaMoon
          size={16}
          className="text-slate-600 transition group-hover:scale-110"
        />
      )}
    </button>
  );
};
