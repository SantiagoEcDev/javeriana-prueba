type Props = {
  label: string;
  value: string | number;
};

export const StatsCard = ({ label, value }: Props) => {
  return (
    <article className="rounded-2xl border border-(--border-subtle) bg-(--bg-secondary) p-5 shadow-(--surface-shadow)">
      <p className="text-sm font-medium text-(--text-muted)">{label}</p>
      <p className="mt-2 text-3xl font-extrabold text-(--text-primary)">
        {value}
      </p>
    </article>
  );
};