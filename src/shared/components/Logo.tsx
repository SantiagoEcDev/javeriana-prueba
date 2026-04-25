import { FaGraduationCap } from "react-icons/fa";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--accent)">
        <FaGraduationCap className="text-lg text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-extrabold tracking-tight text-(--text-primary)">
          Javeriana
        </span>
        <span className="text-xs font-medium text-(--text-muted)">
          Lead Manager
        </span>
      </div>
    </div>
  );
};
