import { StyledTableColumn } from './style';

interface TableColumnProps {
  header: string;
  cells: string[];
}

const TableColumn = ({ header, cells }: TableColumnProps) => {
  return (
    <StyledTableColumn>
      <h4>{header}</h4>
      {cells.map((cell, index) => (
        <p key={index}>{cell}</p>
      ))}
    </StyledTableColumn>
  );
};

export default TableColumn;
