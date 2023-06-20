import TableColumn from '../TableColumn';
import { StyledTable, StyledTableContainer } from './style';

interface TableProps {
  headers: string[];
  rows: Record<string, string>[];
  searchTerm: string;
  setResultCount: (resultCount: number) => void;
}

const Table = ({ headers, rows, searchTerm, setResultCount }: TableProps) => {
  const filteredRows = searchTerm
    ? rows.filter((row) =>
        Object.values(row).some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : rows;

  return (
    <StyledTable>
      <StyledTableContainer>
        {headers.map((header) => {
          const cells = filteredRows.map((row) => row[header]);

          setResultCount(cells.length);
          return <TableColumn key={header} header={header} cells={cells} />;
        })}
      </StyledTableContainer>
    </StyledTable>
  );
};

export default Table;
