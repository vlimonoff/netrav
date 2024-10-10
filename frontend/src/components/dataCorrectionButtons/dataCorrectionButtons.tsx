import { FC } from "react";
import { IProps } from "./types";
// import { IArtist, IAssociation, IArtmovements } from "../../types";

import { IconButton } from "@mui/material";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

export const DataCorrectionButtons: FC<IProps> = ({
  row,
    setIsOpenEditModal,
    setIsOpenDeleteModal,
    isOpenEditModal,
    isOpenDeleteModal,
    setCurrentRow,
  // openModalEdit,
  // openModalDelete,
  type,
}) => {

    const openModalEdit = () => {
      setIsOpenEditModal(!isOpenEditModal);
      row && setCurrentRow(row);
    };

    const openModalDelete = () => {
      setIsOpenDeleteModal(!isOpenDeleteModal);
      row && setCurrentRow(row);
    };

  return (
    <>
      {type ? (
        <>
          <Tooltip title="Добавить запись">
            <IconButton aria-label="add" onClick={() => openModalEdit}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Удалить выбранные записи">
            <IconButton
              aria-label="delete"
              onClick={() => openModalDelete}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <>
          <Tooltip title="Редактировать запись">
            <IconButton aria-label="edit" onClick={() => openModalEdit}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Удалить запись">
            <IconButton
              aria-label="delete"
              onClick={() => openModalDelete}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      )}
    </>
  );
};
