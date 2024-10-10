import { FC } from 'react';
import {
  TableCell,
  TableRow as MuiTableRow,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { DataCorrectionButtons } from '../dataCorrectionButtons';
import { IRowProps } from './types';

export const TableRow: FC<IRowProps> = ({
  row,
  checked,
  onChange,
  openModalEdit,
  openModalDelete,
}) => {
  return (
    <MuiTableRow hover role='checkbox' tabIndex={-1}>
      <TableCell>
        <FormControlLabel
          label=''
          control={<Checkbox checked={checked} onChange={onChange} />}
        />
      </TableCell>
      <TableCell>{row.title || '-'}</TableCell>
      <TableCell>{row.info || '-'}</TableCell>
      <TableCell>
        <DataCorrectionButtons
          openModalEdit={() => openModalEdit(row)}
          openModalDelete={() => openModalDelete(row)}
        />
      </TableCell>
    </MuiTableRow>
  );
};
