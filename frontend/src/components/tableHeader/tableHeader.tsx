import { FC, useState } from "react";
import { IProps } from "./types";
import {
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  FormControlLabel,
  Tooltip,
  IconButton,
} from "@mui/material";

import { DeleteModal } from "../deleteModal";
import { EditModal } from "../editModal";
import { DataCorrectionButtons } from "../dataCorrectionButtons";
import LinkIcon from "@mui/icons-material/Link";

export const TableHeader: FC<IProps> = ({
  type,
  rows,
  columns,
  checkedCount,
  rowsCount,
  checkedList,
  setCheckedList,
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
      checkedList.length === rows?.length ? [] : rows?.map((row) => row) || []
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
          ))}{" "}
          {type === "artist" && (
            <TableCell>
              <Tooltip title={"Ссылка на Wiki"}>
                <IconButton aria-label="link">
                  <LinkIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          )}
          <TableCell>
            <DataCorrectionButtons
              openModalEdit={openModalAdd}
              openModalDelete={openModalDelete}
              type="header"
            />
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
          type={type}
          isOpenDeleteModal={isOpenDeleteModal}
          currentRows={checkedList}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
        />
      )}
    </>
  );
};
