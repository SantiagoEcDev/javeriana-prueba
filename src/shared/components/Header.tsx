import { useState } from "react";
import { Nav } from "./Nav";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderDesktopActions } from "./HeaderDesktopActions";
import { HeaderMobileToggle } from "./HeaderMobileToggle";
import { HeaderMobileMenu } from "./HeaderMobileMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full border-b border-(--border-subtle) bg-[color-mix(in_oklab,var(--bg-secondary)_88%,transparent)] backdrop-blur-sm sticky top-0 z-40">
      <div className="relative mx-auto w-full max-w-7xl flex items-center justify-between px-4 py-4 md:px-6 md:py-5">
        <HeaderLogo onLogoClick={closeMenu} />

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <Nav className="flex items-center gap-2" />
        </div>

        <HeaderDesktopActions />

        <HeaderMobileToggle
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {isMenuOpen && <HeaderMobileMenu onNavClick={closeMenu} />}
    </header>
  );
};