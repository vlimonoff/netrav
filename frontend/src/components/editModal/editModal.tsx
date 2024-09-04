import { FC, useState } from "react";
import { IProps } from "./types";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { CreateArtistForm } from "../create-artist-form";
import { CreateAssociationForm } from "../create-association-form";
import { CreateArtMovementsForm } from "../create-artmovements-form";

export const EditModal: FC<IProps> = ({
  type,
  isOpenEditModal,
  currentRow,
  setIsOpenEditModal,
  action,
}) => {
  const [isClearForm, setIsClearForm] = useState<boolean>(false);

  const cleaningForm = () => {
    setIsClearForm(true);
  };

  const handleCloseEditModal = () => {
    setIsOpenEditModal(false);
  };

  const titleDefinition = (type: string) => {
    let currentType;
    const typesArray = ["художника", "объединение", "направление"];
    type === "artist"
      ? (currentType = typesArray[0])
      : type === "associations"
      ? (currentType = typesArray[1])
      : (currentType = typesArray[2]);

    return `Добавить ${currentType}`;
  };
  return (
    <Dialog open={isOpenEditModal} onClose={handleCloseEditModal} maxWidth="xl">
      <DialogTitle>
        {action === "add" ? titleDefinition(type) : "Редактирование"}
      </DialogTitle>
      <DialogContent>
        {type === "artist" ? (
          isClearForm ? (
            <CreateArtistForm action={"clear"} />
          ) : (
            <CreateArtistForm row={currentRow} />
          )
        ) : type === "associations" ? (
          isClearForm ? (
            <CreateAssociationForm />
          ) : (
            <CreateAssociationForm />
          )
        ) : isClearForm ? (
          <CreateArtMovementsForm />
        ) : (
          <CreateArtMovementsForm />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseEditModal}>Отменить</Button>
        <Button onClick={cleaningForm}>Очистить</Button>
        <Button variant="contained" type="submit">
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
