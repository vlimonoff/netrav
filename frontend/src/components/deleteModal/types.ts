import { IArtist, IAssociation, IArtmovements } from "../../types";

export interface IProps {
    isOpenDeleteModal: boolean;
    setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    currentRow?: IArtist | IAssociation | IArtmovements | null;
    currentRows?: Array<IArtist> | Array<IAssociation> | Array<IArtmovements>;
};