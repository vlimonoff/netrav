import { IArtist, IAssociation, IArtmovements } from "../../types";

export interface IProps {
  id: number;
  idx: number;
  checkedList: number[];
  setCheckedList: React.Dispatch<React.SetStateAction<number[]>>;
  // setCurrentRowsClick: React.Dispatch<React.SetStateAction<boolean>>;
  rows: Array<IArtist> | Array<IArtmovements> | Array<IAssociation> | null;
  // currentRows: Array<IArtist> | Array<IArtmovements> | Array<IAssociation>;
  currentRows: (IAssociation | IArtmovements | IArtist)[];
  setCurrentRows: React.Dispatch<
    React.SetStateAction<(IAssociation | IArtmovements | IArtist)[]>
  >;
  checkedListRef?: React.MutableRefObject<Number[]>;

  // | React.Dispatch<React.SetStateAction<IArtist[] | null>>
  // | React.Dispatch<React.SetStateAction<IArtmovements[] | null>>;
  // setCurrentRowsArtist?: React.Dispatch<React.SetStateAction<IArtist[]>>;
  // setCurrentRowsArtmovements?: React.Dispatch<React.SetStateAction<IArtmovements[]>>;
  // setCurrentRowsAssociation?: React.Dispatch<React.SetStateAction<IAssociation[]>>;
  // rows?: Array<IArtist> | Array<IArtmovements> | Array<IAssociation> ;
  // rows: Array<IArtist>;
  // currentRows:
  //   | Array<IArtist>;
  //   // | Array<IArtmovements>
  //   // | Array<IAssociation>
  //   // | null;
  // setCurrentRows:
  //   | React.Dispatch<React.SetStateAction<Array<IArtist>>>;
  //   // | React.Dispatch<React.SetStateAction<IArtmovements[]>>
  //   // | React.Dispatch<React.SetStateAction<IAssociation[]>>;
}
