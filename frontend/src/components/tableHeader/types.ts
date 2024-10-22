import { IArtist, IAssociation, IColumn, IArtmovements } from "../../types";

export interface IProps {
  type: string;
  columns: Array<IColumn>;
  rowsCount: number;
  checkedCount: number;
  checkedList: (IAssociation | IArtist | IArtmovements)[];
  setCheckedList: React.Dispatch<React.SetStateAction<(IAssociation | IArtist | IArtmovements)[]>>
  rows: Array<IArtist> | Array<IArtmovements> | Array<IAssociation> | null;
}
