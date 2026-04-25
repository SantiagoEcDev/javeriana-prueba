
type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  if (totalPages <= 1) return null;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={isFirstPage}
        className="rounded-xl border border-(--border-subtle) bg-(--bg-secondary) px-4 py-2 text-sm font-semibold text-(--text-secondary) shadow-sm transition hover:border-(--accent) hover:text-(--accent) disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-(--border-subtle) disabled:hover:text-(--text-secondary)"
      >
        Anterior
      </button>

      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`min-w-10 rounded-xl px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-(--accent) text-white shadow-sm"
                : "border border-(--border-subtle) bg-(--bg-secondary) text-(--text-secondary) hover:border-(--accent) hover:text-(--accent)"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={isLastPage}
        className="rounded-xl border border-(--border-subtle) bg-(--bg-secondary) px-4 py-2 text-sm font-semibold text-(--text-secondary) shadow-sm transition hover:border-(--accent) hover:text-(--accent) disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-(--border-subtle) disabled:hover:text-(--text-secondary)"
      >
        Siguiente
      </button>
    </div>
  );
};