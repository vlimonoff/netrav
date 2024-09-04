import { IArtist, IColumn } from "../../types";


export interface IProps {
    columns: Array<IColumn>;
    handleChangeAllRows: () => void;
    currentRows: Array<IArtist>;
    rowsCount: number;
    checkedCount: number;
};