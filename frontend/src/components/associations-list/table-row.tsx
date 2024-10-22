import { FC } from "react";
import { TableCell, TableRow as MuiTableRow, Box } from "@mui/material";
import { DataCorrectionButtons } from "../dataCorrectionButtons";
import { IRowProps } from "./types";
import { CheckboxComponent } from "../checkboxComponent";
import { styles } from "./styles";
import { IArtist } from "../../types";

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
      <TableCell>
        <Box sx={styles.scroll}> {row.title || "-"} </Box>
      </TableCell>
      <TableCell>{`${row.workStart || "?"}-${row.workEnd || "?"}`}</TableCell>
      <TableCell>{row.status || "-"}</TableCell>
      <TableCell>{row.city || "-"}</TableCell>
      <TableCell>{row.otherInfo || "-"}</TableCell>
      <TableCell>
        <Box sx={styles.scroll}>
          {row.owners
            ?.map(
              (owner: IArtist) =>
                `${owner.lastName} ${owner.firstName?.[0]}.${
                  owner.patronymic ? `${owner.patronymic[0]}.` : ""
                }`
            )
            .join(", ") || "-"}
        </Box>
      </TableCell>
      <TableCell>
        <Box sx={styles.scroll}>
          {row.members
            ?.map(
              (member: IArtist) =>
                `${member.lastName} ${member.firstName?.[0]}.${
                  member.patronymic ? `${member.patronymic[0]}.` : ""
                }`
            )
            .join(", ") || "-"}
        </Box>
      </TableCell>
      <TableCell>
        <DataCorrectionButtons
          openModalEdit={() => openModalEdit(row)}
          openModalDelete={() => openModalDelete(row)}
        />
      </TableCell>
    </MuiTableRow>
  );
};
