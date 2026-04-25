import { Link } from "react-router-dom";
import { Nav } from "./Nav";

type Props = {
  onNavClick: () => void;
};

export const HeaderMobileMenu = ({ onNavClick }: Props) => {
  return (
    <div className="md:hidden border-t border-(--border-subtle) bg-(--bg-secondary)">
      <Nav onNavClick={onNavClick} className="flex flex-col gap-1 px-4 py-3" />
      <Link
        to="/leads"
        onClick={onNavClick}
        className="mt-2 block rounded-lg bg-(--accent) px-3 py-2 text-sm font-semibold text-white text-center transition hover:bg-(--accent-hover)"
      >
        Mis leads
      </Link>
    </div>
  );
};
