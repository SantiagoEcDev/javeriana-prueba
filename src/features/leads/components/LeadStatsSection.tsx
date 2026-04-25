import { StatsCard } from './StatsCard';

type Stat = {
  label: string;
  value: string | number;
};

type Props = {
  stats: Stat[];
};

export const LeadsStatsSection = ({ stats }: Props) => {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <StatsCard key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </section>
  );
};