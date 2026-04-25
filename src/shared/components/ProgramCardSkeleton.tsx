type Props = {
  count?: number;
};

export const ProgramCardSkeleton = ({ count = 8 }: Props) => {
  const skeletonItems = Array.from({ length: count });

  return (
    <>
      {skeletonItems.map((_, index) => (
        <article
          key={`skeleton-${index}`}
          className="w-full overflow-hidden rounded-2xl border border-(--border-subtle) bg-(--bg-secondary) shadow-(--surface-shadow)"
          aria-hidden="true"
        >
          <div className="h-48 w-full animate-pulse bg-linear-to-r from-(--bg-elevated) via-(--bg-secondary) to-(--bg-elevated)" />

          <div className="flex flex-col gap-3 p-5">
            <div className="h-3 w-24 animate-pulse rounded-full bg-(--accent-soft)" />
            <div className="h-5 w-11/12 animate-pulse rounded bg-(--bg-elevated)" />
            <div className="h-4 w-4/5 animate-pulse rounded bg-(--bg-elevated)" />

            <div className="mt-1 grid gap-2 rounded-xl bg-(--bg-elevated) p-3">
              <div className="h-3 w-full animate-pulse rounded bg-(--bg-secondary)" />
              <div className="h-3 w-full animate-pulse rounded bg-(--bg-secondary)" />
              <div className="h-3 w-10/12 animate-pulse rounded bg-(--bg-secondary)" />
            </div>

            <div className="mt-1 flex items-center justify-between">
              <div className="h-3 w-20 animate-pulse rounded bg-(--bg-elevated)" />
              <div className="h-8 w-20 animate-pulse rounded-lg bg-(--accent-soft)" />
            </div>
          </div>
        </article>
      ))}
    </>
  );
};
