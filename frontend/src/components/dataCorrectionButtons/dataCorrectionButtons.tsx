import { FC } from "react";
import { IProps } from "./types";
// import { IArtist, IAssociation, IArtmovements } from "../../types";

import { IconButton } from "@mui/material";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

export const DataCorrectionButtons: FC<IProps> = ({
  openModalEdit,
  openModalDelete,
  type,
}) => {
  return (
    <>
        <Tooltip title={type ? "Добавить запись" : "Редактировать запись"}>
          <IconButton aria-label="edit" onClick={openModalEdit}>
            {type ? <AddIcon /> : <EditIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title={type ? "Удалить выбранные записи" : "Удалить запись"}>
          <IconButton aria-label="delete" onClick={openModalDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
    </>
  );
};
