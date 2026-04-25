type Props = {
  value: string;
  onChange: (value: string) => void;
};

const options = [
  { value: "Pregrado", label: "Pregrado" },
  { value: "Posgrado", label: "Posgrado" },
  { value: "Educación Continua", label: "Educación Continua" },
];

const Filter = ({ value, onChange }: Props) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 w-full rounded-lg border border-(--border-subtle) bg-(--bg-secondary) px-4 py-2 text-sm font-medium text-(--text-primary) shadow-sm outline-none transition focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20"
      >
        <option value="">Todos</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
