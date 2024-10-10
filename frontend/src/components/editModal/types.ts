import { IArtist,  IAssociation, IArtmovements } from "../../types";

export interface IProps {
    type: string;
    isOpenEditModal: boolean;
    setIsOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    currentRow?: IArtist | IAssociation | IArtmovements | null;
    // setCurrentRow?: React.Dispatch<React.SetStateAction<IArtist | undefined>>;
    currentRowArtist?: IArtist | null;
    currentRowAssociation?: IAssociation | null;
    currentRowArtmovements?: IArtmovements | null;
    action?: string;
};