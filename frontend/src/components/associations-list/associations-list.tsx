import { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { endpoints } from '../../endpoints';
import { Loader } from '../loader/loader';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
}

const columns: readonly Column[] = [
  {
    id: 'title',
    label: 'Наименование',
    minWidth: 100,
  },
  {
    id: 'workStart',
    label: 'Дата начала работы',
    minWidth: 50,
  },
  {
    id: 'workEnd',
    label: 'Дата окончания работы',
    minWidth: 50,
  },
  {
    id: 'status',
    label: 'Статус',
    minWidth: 100,
  },
  {
    id: 'city',
    label: 'Город',
    minWidth: 100,
  },
  {
    id: 'otherInfo',
    label: 'Дополнительная информация',
    minWidth: 100,
  },
];

export const AssociationsList = () => {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchArtists = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(endpoints.ASSOCIATIONS);

      const data = await response.json();

      if (data) {
        setRows(data);
      }
    } catch (error) {}

    setIsLoading(false);
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {isLoading && <Loader />}

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => {
              console.log(row);

              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={idx}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
