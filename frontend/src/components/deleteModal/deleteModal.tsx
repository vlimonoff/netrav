import { FC } from "react";
import { IProps } from "./types";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export const DeleteModal: FC<IProps> = ({
  isOpenDeleteModal,
  setIsOpenDeleteModal,
  currentRow,
  currentRows,
}) => {
  const handleCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  return (
    <Dialog
      open={isOpenDeleteModal}
      onClose={handleCloseDeleteModal}
      maxWidth="xl"
      // onSubmit={ }
    >
      {currentRow ? (
        <DialogTitle>Вы уверены, что хотите удалить запись?</DialogTitle>
      ) : (
        <DialogTitle>
          Вы уверены, что хотите удалить {currentRows?.length} записей?
        </DialogTitle>
      )}
      <DialogActions>
        <Button onClick={handleCloseDeleteModal}>Отменить</Button>
        <Button variant="contained" type="submit">
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
