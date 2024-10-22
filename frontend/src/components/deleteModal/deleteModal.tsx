import { FC } from "react";
import { IProps } from "./types";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { endpoints } from "../../endpoints";
import { IArtist, IArtmovements, IAssociation } from "../../types";

export const DeleteModal: FC<IProps> = ({
  type,
  isOpenDeleteModal,
  setIsOpenDeleteModal,
  currentRow,
  currentRows,
}) => {
  const lenght = currentRows?.length || 0;
  const endpoint =
    type === "artist"
      ? endpoints.ARTISTS
      : type === "artmovements"
      ? endpoints.ART_MOVEMENTS
      : endpoints.ASSOCIATIONS;

  const handleCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  const definitionOfDeclension = () => {
    const lastIndex = Number(lenght?.toString()?.split("").at(-1));
    return lastIndex === 1 && lenght !== 11
      ? "запись"
      : lastIndex < 5 && (lenght < 5 || lenght > 20)
      ? "записи"
      : "записей";
  };

  const deleteRows = async () => {
    let rowsDelete: (IArtist | IAssociation | IArtmovements)[] | undefined = [];
    let response: Response;

    currentRow ? rowsDelete.push(currentRow) : (rowsDelete = currentRows);
    try {
      rowsDelete?.forEach(async (row) => {
        response = await fetch(`${endpoint}/{${row.id}}`, {
          method: "DELETE",
        });
        await response.json();
      });
    } catch (error) {}

    handleCloseDeleteModal();
  };

  return (
    <Dialog
      open={isOpenDeleteModal}
      onClose={handleCloseDeleteModal}
      maxWidth="xl"
      onSubmit={deleteRows}
    >
      {currentRow ? (
        <DialogTitle>Вы уверены, что хотите удалить запись?</DialogTitle>
      ) : (
        <DialogTitle>
          {lenght > 0
            ? `Вы уверены, что хотите удалить ${lenght} ${definitionOfDeclension()}?`
            : "Нет отмеченных записей для удаления."}
        </DialogTitle>
      )}
      <DialogActions>
        <Button onClick={handleCloseDeleteModal}>
          {lenght > 0 ? "Отменить" : "Закрыть"}
        </Button>
        {lenght > 0 && (
          <Button variant="contained" type="submit">
            Удалить
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
