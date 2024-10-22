import { IArtist, IAssociation, IArtmovements } from "../../types";

export interface IProps {
    type: string;
    isOpenDeleteModal: boolean;
    setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    currentRow?: IArtist | IAssociation | IArtmovements | null;
    currentRows?: (IAssociation | IArtist | IArtmovements)[];
};