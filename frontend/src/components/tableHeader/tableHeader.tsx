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
// import { DataCorrectionButtons } from "../dataCorrectionButtons";

export const TableHeader: FC<IProps> = ({
  type,
  columns,
  rowsCount,
  checkedCount,
  setCheckedList,
  checkedList,
  rows,
  currentRows,
  // setCurrentRows,
  currentRow,
  // row,
  // setCurrentRow,
  // setCurrentRowsArtist,
  
}) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  const openModalAdd = () => {
    setIsOpenAddModal(!isOpenAddModal);
  };
  const openModalDelete = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  const handleChangeAllRows = () => {
    setCheckedList(
      checkedList.length === rows?.length
        ? []
        : rows?.map((row) => row.id) || []
    );
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
            <TableCell
              key={column.id}
              style={{ width: column.width, minWidth: column.minWidth }}
            >
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
            {/* <DataCorrectionButtons
              // openModalEdit={openModalAdd()}
              // openModalDelete={openModalDelete()}
              setIsOpenEditModal={setIsOpenAddModal}
              setIsOpenDeleteModal={setIsOpenDeleteModal}
              isOpenEditModal={isOpenAddModal}
              isOpenDeleteModal={isOpenDeleteModal}
              setCurrentRow={setCurrentRow}
              type="header"
              row={currentRow}
            /> */}
          </TableCell>
        </TableRow>
      </TableHead>
      {isOpenAddModal && (
        <EditModal
          type={type}
          isOpenEditModal={isOpenAddModal}
          setIsOpenEditModal={setIsOpenAddModal}
          action="add"
        />
      )}
      {isOpenDeleteModal && (
        <DeleteModal
          isOpenDeleteModal={isOpenDeleteModal}
          // currentRows={currentRows.length > 0 ? currentRows : currentRow }
          setIsOpenDeleteModal={setIsOpenDeleteModal}
        />
      )}
      
    </>
  );
};
