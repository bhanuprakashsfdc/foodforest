interface NoteProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Note({ children, style }: NoteProps) {
  return (
    <div className="note" style={{ marginTop: 20, ...style }}>
      {children}
    </div>
  );
}
