import { FC } from 'react';
import { IProps } from "./types";
import { TableCell, TableHead, TableRow } from "@mui/material";

export const TableHeader: FC<IProps>  = ({columns}) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
