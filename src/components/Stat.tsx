interface StatProps {
  figure: React.ReactNode;
  label: string;
}

export function Stat({ figure, label }: StatProps) {
  return (
    <div className="stat">
      <span className="figure">{figure}</span>
      <span className="label">{label}</span>
    </div>
  );
}
