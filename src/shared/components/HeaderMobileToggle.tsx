import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export const HeaderMobileToggle = ({ isOpen, onToggle }: Props) => {
  return (
    <div className="ml-auto flex md:hidden items-center gap-2">
      <ThemeToggle />
      <button
        onClick={onToggle}
        className="rounded-lg p-2 transition hover:bg-(--bg-elevated)"
        aria-label="Abrir menú"
      >
        {isOpen ? (
          <IoClose className="text-2xl text-(--text-primary)" />
        ) : (
          <GiHamburgerMenu className="text-2xl text-(--text-primary)" />
        )}
      </button>
    </div>
  );
};
