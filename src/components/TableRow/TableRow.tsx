import { StyledTableRow } from './style';

interface TableRow {
  cells: string[];
}

const TableRow = ({ cells }: TableRow) => {
  return (
    <StyledTableRow>
      {cells.map((cell, index) => (
        <td key={index}>{cell}</td>
      ))}
    </StyledTableRow>
  );
};

export default TableRow;
