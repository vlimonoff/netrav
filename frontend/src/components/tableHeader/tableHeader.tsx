import { FC, useState } from "react";
import { IProps } from "./types";
import {
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import { DeleteModal } from "../deleteModal";
import { EditModal } from "../editModal";

export const TableHeader: FC<IProps> = ({
  columns,
  handleChangeAllRows,
  currentRows,
  rowsCount,
  checkedCount,
}) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  const openModalAdd = () => {
    setIsOpenAddModal(!isOpenAddModal);
  };
  const openModalDelete = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell>
            <FormControlLabel
              label=""
              control={
                <Checkbox
                  checked={rowsCount > 0 && rowsCount === checkedCount}
                  indeterminate={checkedCount > 0 && checkedCount !== rowsCount}
                  onChange={handleChangeAllRows}
                />
              }
            />
          </TableCell>
          {columns.map((column) => (
            <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
              {column.label}
            </TableCell>
          ))}
          <TableCell>
            <Tooltip title="Добавить запись">
              <IconButton aria-label="add" onClick={() => openModalAdd()}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Удалить выбранные записи">
              <IconButton aria-label="delete" onClick={() => openModalDelete()}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
      </TableHead>
      {isOpenAddModal && (
        <EditModal
          type="artist"
          isOpenEditModal={isOpenAddModal}
          setIsOpenEditModal={setIsOpenAddModal}
          action="add"
        />
      )}
      {isOpenDeleteModal && (
        <DeleteModal
          isOpenDeleteModal={isOpenDeleteModal}
          currentRows={currentRows}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
        />
      )}
    </>
  );
};
