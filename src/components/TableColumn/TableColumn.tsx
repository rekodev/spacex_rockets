import { StyledTableColumn } from './style';

interface TableColumnProps {
  header: string;
  cells: string[];
  isColumnActive: boolean;
  onSort: (column: string, direction: 'up' | 'down') => void;
  isFirst: boolean;
  activeSortArrow: 'up' | 'down' | null;
}

const TableColumn = ({
  header,
  cells,
  isColumnActive,
  onSort,
  isFirst,
  activeSortArrow,
}: TableColumnProps) => {
  return (
    <StyledTableColumn>
      <h4 className={isFirst ? 'first' : ''}>
        {header}
        <div className='arrow-container'>
          <i
            onClick={() => onSort(header, 'up')}
            className={
              isColumnActive && activeSortArrow === 'up' ? 'active' : ''
            }
          >
            ▲
          </i>
          <i
            onClick={() => onSort(header, 'down')}
            className={
              isColumnActive && activeSortArrow === 'down' ? 'active' : ''
            }
          >
            ▼
          </i>
        </div>
      </h4>
      {cells.map((cell, index) => (
        <p key={index}>{cell}</p>
      ))}
    </StyledTableColumn>
  );
};

export default TableColumn;
