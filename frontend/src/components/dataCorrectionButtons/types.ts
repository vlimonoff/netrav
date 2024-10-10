import { IArtist, IAssociation, IArtmovements } from "../../types";

export interface IProps {
    row:  IArtist | IArtmovements | IAssociation | undefined;
    setIsOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenEditModal: boolean;
    isOpenDeleteModal: boolean;
    setCurrentRow: React.Dispatch<React.SetStateAction<IArtist | IArtmovements | IAssociation >>
    // openModalEdit:  void;
    // openModalDelete: void;
    type?: string;
};