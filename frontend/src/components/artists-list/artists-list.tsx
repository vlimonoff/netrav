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
  format?: (value: string | Array<number>) => string;
}

// interface IRow {
//   artMovements: Array<number>;
//   lastName: string;
//   firstName: string;
//   patronymic: string;
//   isArtist: boolean;
//   birthDate: string;
//   deathDate: string;
//   birthPlace: string;
//   deathPlace: string;
//   otherInfo: string;
//   wikiUrl: string;
// }

const columns: readonly Column[] = [
  {
    id: 'firstName',
    label: 'ФИО',
    minWidth: 170,
    format: (value: string | Array<number>) => {
      console.log(value);
      return typeof value === 'string' ? value : '';
    },
  },
  {
    id: 'artMovements',
    label: 'Направления',
    minWidth: 100,
    format: (values: string | Array<number>) =>
      typeof values === 'object' ? values.join(', ') : values,
  },
  {
    id: 'birthDate',
    label: 'Дата рождения',
    minWidth: 170,
  },
  {
    id: 'deathDate',
    label: 'Дата смерти',
    minWidth: 170,
  },
];

export const ArtistsList = () => {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchArtists = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(endpoints.ARTISTS);

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
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
