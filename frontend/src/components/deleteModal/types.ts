import { IArtist } from "../../types";

export interface IProps {
    isOpenDeleteModal: boolean;
    setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    currentRow?: IArtist | undefined;
    currentRows?: Array<IArtist> | undefined;
};