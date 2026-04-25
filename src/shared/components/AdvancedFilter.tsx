import { FiSearch } from "react-icons/fi";
import Filter from "./Filter";
import { useDebounce } from "../hooks/useDebounce";
import { useState, useEffect } from "react";

type Props = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  categoryValue: string;
  onCategoryChange: (value: string) => void;
  searchPlaceholder?: string;
};

export const AdvancedFilter = ({
  searchValue,
  onSearchChange,
  categoryValue,
  onCategoryChange,
  searchPlaceholder = "Buscar programa...",
}: Props) => {
  const [localSearch, setLocalSearch] = useState(searchValue);
  const debouncedSearch = useDebounce(localSearch, 400);

  useEffect(() => {
    onSearchChange(debouncedSearch);
  }, [debouncedSearch, onSearchChange]);

  return (
    <section className="mb-6 rounded-2xl border border-(--border-subtle) bg-(--bg-secondary) p-4 shadow-(--surface-shadow)">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_260px]">
        <label className="flex items-center gap-2 rounded-xl border border-(--border-subtle) bg-(--bg-elevated) px-3 py-1.5 transition focus-within:border-(--accent) focus-within:ring-2 focus-within:ring-(--accent)/15">
          <FiSearch className="text-(--text-muted)" aria-hidden="true" />
          <input
            type="search"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="h-10 w-full bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-muted)"
          />
        </label>

        <label className="flex items-center gap-2 rounded-xl border border-(--border-subtle) bg-(--bg-elevated) px-3 py-1.5">
          <span className="text-sm font-semibold text-(--text-secondary)">
            Categoría
          </span>
          <Filter
            value={categoryValue === "all" ? "" : categoryValue}
            onChange={onCategoryChange}
          />
        </label>
      </div>
    </section>
  );
};
