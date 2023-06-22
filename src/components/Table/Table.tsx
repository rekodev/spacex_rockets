import TableColumn from '../TableColumn';
import { useState, useEffect } from 'react';
import {
  StyledNoResultsParagraph,
  StyledTable,
  StyledTableContainer,
} from './style';

interface TableProps {
  headers: string[];
  rows: Record<string, string>[];
  searchTerm: string;
  setResultCount: (resultCount: number) => void;
}

const Table = ({ headers, rows, searchTerm, setResultCount }: TableProps) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [sortedRows, setSortedRows] = useState<Record<string, string>[]>([]);

  const parseValue = (value: string) => {
    if (value.startsWith('$')) value = value.substring(1);

    if (!/^\d/.test(value)) {
      return value;
    }

    const parsedNumber = parseFloat(value.replace(/[^0-9.]/g, ''));
    return isNaN(parsedNumber) ? value : parsedNumber;
  };

  const handleSort = (column: string, direction: 'up' | 'down') => {
    if (
      column === sortColumn &&
      direction === (sortDirection === 'asc' ? 'up' : 'down')
    ) {
      setSortColumn(null);
      setSortDirection('asc');
    } else {
      setSortDirection(direction === 'up' ? 'asc' : 'desc');
      setSortColumn(column);
    }
  };

  useEffect(() => {
    if (!sortColumn) {
      setSortedRows([...rows]);
    } else {
      const parsedRows = [...rows].sort((a, b) => {
        const aValue = parseValue(a[sortColumn]);
        const bValue = parseValue(b[sortColumn]);

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
        } else {
          const stringA = String(aValue);
          const stringB = String(bValue);

          return sortDirection === 'asc'
            ? stringA.localeCompare(stringB)
            : stringB.localeCompare(stringA);
        }
      });
      setSortedRows(parsedRows);
    }
  }, [sortColumn, sortDirection, rows]);

  const filteredRows = searchTerm
    ? sortedRows.filter((row) =>
        Object.values(row).some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : sortedRows;

  useEffect(() => {
    setResultCount(filteredRows.length);
  }, [filteredRows, setResultCount]);

  return filteredRows.length > 0 ? (
    <StyledTable>
      <StyledTableContainer>
        {headers.map((header, index) => {
          const cells = filteredRows.map((row) => row[header]);

          return (
            <TableColumn
              key={header}
              header={header}
              cells={cells}
              isColumnActive={sortColumn === header}
              onSort={handleSort}
              activeSortArrow={
                sortColumn === header
                  ? sortDirection === 'asc'
                    ? 'up'
                    : 'down'
                  : null
              }
              isFirst={index === 0}
            />
          );
        })}
      </StyledTableContainer>
    </StyledTable>
  ) : (
    <StyledNoResultsParagraph>
      <h3>Nothing found</h3>
      <p>
        You searched for "<b>{searchTerm}</b>"
      </p>
    </StyledNoResultsParagraph>
  );
};

export default Table;
