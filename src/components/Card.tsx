interface CardProps {
  num?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export function Card({ num, title, children }: CardProps) {
  return (
    <div className="card">
      {num && <div className="num">{num}</div>}
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
