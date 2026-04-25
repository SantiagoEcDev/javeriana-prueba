import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const HeaderDesktopActions = () => {
  return (
    <div className="hidden md:flex flex-1 items-center justify-end gap-3">
      <ThemeToggle />
      <Link
        to="/leads"
        className="rounded-lg bg-(--accent) px-4 py-2 text-sm font-semibold text-white transition hover:bg-(--accent-hover)"
      >
        Mis leads
      </Link>
    </div>
  );
};
