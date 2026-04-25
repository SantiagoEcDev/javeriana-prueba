type Props = {
  title: string;
  search?: string;
  clearSearch?: () => void;
};

const EmptyError = ({ title, search }: Props) => {
  const searchValue = search?.trim();

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center rounded-3xl border border-(--border-subtle) bg-linear-to-br from-(--bg-secondary) via-(--bg-elevated) to-(--bg-secondary) px-6 py-12 text-center shadow-(--surface-shadow)">
      <div className="mb-4 text-5xl" aria-hidden="true">
        📚
      </div>

      <h2 className="text-2xl font-bold text-(--text-primary)">{title}</h2>

      <p className="mt-3 max-w-lg text-sm leading-relaxed text-(--text-secondary)">
        {searchValue ? (
          <>
            No se encontró <span className="text-blue-400 font-semibold bg-blue-400/10 px-1 rounded">"{searchValue}"</span>.
          </>
        ) : (
          <>No hay resultados para mostrar.</>
        )}{" "}
        Intenta ajustar tu búsqueda o cambiar el filtro.
      </p>

      
    </div>
  );
};

export default EmptyError;
