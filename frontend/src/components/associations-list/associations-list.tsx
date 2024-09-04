import { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { endpoints } from '../../endpoints';
import { Loader } from '../loader';
import { IArtist, IAssociation } from '../../types';
import { columns } from './constants';
import { styles } from "./styles";
import { TableHeader } from "../tableHeader";


export const AssociationsList = () => {
  const [rows, setRows] = useState<Array<IAssociation> | null>(null);
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
    <Paper sx={styles.paper}>
      {isLoading && <Loader />}

      <TableContainer sx={styles.container}>
        <Table stickyHeader aria-label='sticky table'>
          {/* <TableHeader columns={columns}/> */}
          <TableBody>
            {rows?.map((row: IAssociation, idx) => {
              const { title, workStart, workEnd, status, city, members, otherInfo, owners } = row;

              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={idx}>
                  <TableCell>{title || '-'}</TableCell>
                  <TableCell>{`${workStart || '?'}-${workEnd || '?'}`}</TableCell>
                  <TableCell>{status || '-'}</TableCell>
                  <TableCell>{city || '-'}</TableCell>
                  <TableCell>{otherInfo || '-'}</TableCell>
                  <TableCell>{owners?.map((owner: IArtist) => `${owner.lastName} ${owner.firstName?.[0]}.${owner.patronymic ? `${owner.patronymic[0]}.` : ''}`).join(', ') || '-'}</TableCell>
                  <TableCell>{members?.map((member: IArtist) => `${member.lastName} ${member.firstName?.[0]}.${member.patronymic ? `${member.patronymic[0]}.` : ''}`).join(', ') || '-'}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
