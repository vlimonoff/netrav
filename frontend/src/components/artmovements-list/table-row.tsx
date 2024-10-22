import { FC } from "react";
import {
  TableCell,
  TableRow as MuiTableRow,
} from "@mui/material";
import { DataCorrectionButtons } from "../dataCorrectionButtons";
import { IRowProps } from "./types";
import { CheckboxComponent } from "../checkboxComponent";

export const TableRow: FC<IRowProps> = ({
  row,
  checkedList,
  setCheckedList,
  openModalEdit,
  openModalDelete,
}) => {
  return (
    <MuiTableRow hover role="checkbox" tabIndex={-1}>
      <TableCell>
        <CheckboxComponent
          row={row}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
        />
      </TableCell>
      <TableCell>{row.title || "-"}</TableCell>
      <TableCell>{row.info || "-"}</TableCell>
      <TableCell>
        <DataCorrectionButtons
          openModalEdit={() => openModalEdit(row)}
          openModalDelete={() => openModalDelete(row)}
        />
      </TableCell>
    </MuiTableRow>
  );
};
