import { useEffect, useState } from "react";

type NavProps = {
  onNavClick?: () => void;
  className?: string;
};

const navItems = [
  { label: "Inicio", id: "home" },
  { label: "Programas", id: "programs" },
  { label: "Inscripción", id: "enrollment" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Nav = ({ onNavClick, className = "" }: NavProps) => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return null;

        const rect = el.getBoundingClientRect();
        return { id: item.id, top: rect.top };
      });

      const visible = sections
        .filter(Boolean)
        .sort((a, b) => Math.abs(a!.top) - Math.abs(b!.top))[0];

      if (visible) {
        setActive(visible.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={className}>
      {navItems.map((item) => {
        const isActive = active === item.id;

        return (
          <button
            key={item.label}
            onClick={() => {
              scrollToSection(item.id);
              setActive(item.id);
              onNavClick?.();
            }}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
              isActive
                ? "bg-(--accent-soft) text-(--accent)"
                : "text-(--text-secondary) hover:bg-(--bg-elevated) hover:text-(--text-primary)"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
};