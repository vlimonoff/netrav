import { IArtist, IAssociation, IColumn, IArtmovements } from "../../types";

export interface IProps {
  type: string;
  columns: Array<IColumn>;
  rowsCount: number;
  checkedCount: number;
  setCheckedList: React.Dispatch<React.SetStateAction<number[]>>;
  checkedList: number[];
  rows: Array<IArtist> | Array<IArtmovements> | Array<IAssociation> | null;
  currentRow: IArtist | IArtmovements | IAssociation | null;
  // currentRows: Array<IArtist> | Array<IArtmovements> | Array<IAssociation>;
  currentRows: (IAssociation | IArtist | IArtmovements)[];
  // setCurrentRows: React.Dispatch<React.SetStateAction<IAssociation[] | null>>;
  // currentRowsClick: boolean;
  // setCurrentRowsClick: React.Dispatch<React.SetStateAction<boolean>>
//   currentRow?: IArtist | IArtmovements | IAssociation;
//   setCurrentRow:
//     | React.Dispatch<React.SetStateAction<IArtist | undefined>>
//     | React.Dispatch<React.SetStateAction<IArtmovements | undefined>> 
//     | React.Dispatch<React.SetStateAction<IAssociation | undefined>>;
// setCurrentRowsArtist?: React.Dispatch<React.SetStateAction<IArtist>>;
}
