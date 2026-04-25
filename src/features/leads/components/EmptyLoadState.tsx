export const EmptyLeadsState = () => {
  return (
    <div className="rounded-2xl border border-dashed border-(--border-subtle) bg-(--bg-elevated) px-6 py-10 text-center">
      <p className="text-4xl" aria-hidden="true">
        ✨
      </p>
      <h3 className="mt-3 text-xl font-bold text-(--text-primary)">
        Aún no hay leads registrados
      </h3>
      <p className="mx-auto mt-2 max-w-xl text-sm text-(--text-secondary)">
        Cuando alguien complete el formulario, aparecerá aquí con su información.
      </p>
    </div>
  );
};