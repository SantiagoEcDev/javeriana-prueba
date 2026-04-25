import { useMemo } from "react";
import { normalizeText } from "../lib/utils/normalizeText";

type UseAdvancedFilterOptions<T, C extends string> = {
  items: T[];
  searchTerm: string;
  selectedCategory: C | "all";
  getSearchValue: (item: T) => string;
  getCategory: (item: T) => C;
};

export const useAdvancedFilter = <T, C extends string>({
  items,
  searchTerm,
  selectedCategory,
  getSearchValue,
  getCategory,
}: UseAdvancedFilterOptions<T, C>) => {
  const normalizedSearchTerm = normalizeText(searchTerm.trim());

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        normalizedSearchTerm.length === 0 ||
        normalizeText(getSearchValue(item)).includes(normalizedSearchTerm);

      const matchesCategory =
        selectedCategory === "all" || getCategory(item) === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [
    items,
    normalizedSearchTerm,
    selectedCategory,
    getSearchValue,
    getCategory,
  ]);

  return { filteredItems };
};
