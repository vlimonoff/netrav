import { IArtist } from "../../types";

export interface IProps {
    type: string;
    isOpenEditModal: boolean;
    setIsOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    currentRow?: IArtist | undefined;
    // setCurrentRow?: React.Dispatch<React.SetStateAction<IArtist | undefined>>;
    action?: string;
};