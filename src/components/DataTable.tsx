interface DataTableProps {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
  /** Column indexes whose cells should wrap instead of staying on one line. */
  wrapCells?: number[];
  caption: string;
}

export function DataTable({ headers, rows, wrapCells = [], caption }: DataTableProps) {
  return (
    <div className="tblwrap">
      <table>
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className={wrapCells.includes(i) ? "wrap-cell" : undefined}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td key={c} className={wrapCells.includes(c) ? "wrap-cell" : undefined}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
