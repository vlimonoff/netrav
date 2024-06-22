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
import { IArtist } from '../../types';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
}

const columns: readonly Column[] = [
  {
    id: 'lastName',
    label: 'Фамилия',
  },
  {
    id: 'firstName',
    label: 'Имя',
  },
  {
    id: 'patronymic',
    label: 'Отчество',
  },
  {
    id: 'birthDate',
    label: 'Дата рождения',
  },
  {
    id: 'deathDate',
    label: 'Дата смерти',
  },
];

export const ArtistsList = () => {
  const [rows, setRows] = useState<Array<IArtist> | null>([]);
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

      <TableContainer sx={{ maxHeight: '80vh' }}>
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
            {rows?.map((row: IArtist, idx) => {
              const {
                lastName, firstName, patronymic, birthDate, deathDate, birthPlace, deathPlace
              } = row;

              return (
                <TableRow hover tabIndex={-1} key={idx}>
                  <TableCell>{lastName || '-'}</TableCell>
                  <TableCell>{firstName || '-'}</TableCell>
                  <TableCell>{patronymic || '-'}</TableCell>
                  <TableCell>{`${birthDate || '-'}${birthPlace ? `\n(${birthPlace})` : ''}`}</TableCell>
                  <TableCell>{`${deathDate || '-'}${deathPlace ? `\n(${deathPlace})` : ''}`}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
