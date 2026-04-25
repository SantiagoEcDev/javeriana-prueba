import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type NavProps = {
  onNavClick?: () => void;
  className?: string;
};

const navItems = [
  { label: "Inicio", id: "home" },
  { label: "Programas", id: "programs" },
  { label: "Inscripción", id: "enrollment" },
];

export const Nav = ({ onNavClick, className = "" }: NavProps) => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClick = (id: string) => {
    navigate(`/#${id}`);
    setActive(id);
    scrollToSection(id);
    onNavClick?.();
  };

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActive(id);
      }, 50);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => {
          const el = document.getElementById(item.id);
          if (!el) return null;

          const rect = el.getBoundingClientRect();

          return { id: item.id, top: Math.abs(rect.top) };
        })
        .filter(Boolean) as { id: string; top: number }[];

      if (sections.length === 0) return;

      const closest = sections.sort((a, b) => a.top - b.top)[0];

      if (closest) {
        setActive(closest.id);
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
            onClick={() => handleClick(item.id)}
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