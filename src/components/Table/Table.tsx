import TableColumn from '../TableColumn';
import { StyledTable } from './style';

interface TableProps {
  headers: string[];
  rows: Record<string, string>[];
}

const Table = ({ headers, rows }: TableProps) => {
  return (
    <StyledTable>
      {headers.map((header) => {
        const cells = rows.map((row) => row[header]);
        return <TableColumn key={header} header={header} cells={cells} />;
      })}
    </StyledTable>
  );
};

export default Table;
