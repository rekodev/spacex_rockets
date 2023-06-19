import TableRow from '../TableRow';
import { StyledTable } from './style';

interface TableComponents {
  headers: string[];
  rows: string[][];
}

const Table = ({ headers, rows }: TableComponents) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((rowCells, index) => (
          <TableRow key={index} cells={rowCells} />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
