import { IArtist, IAssociation, IArtmovements } from "../../types";

export interface IProps {
  // id: number;
  // checkedList: number[];
  // setCheckedList: React.Dispatch<React.SetStateAction<number[]>>;
  checkedList: (IAssociation | IArtist | IArtmovements)[];
  setCheckedList: React.Dispatch<React.SetStateAction<(IAssociation | IArtist | IArtmovements)[]>>
  row: IArtist | IArtmovements | IAssociation;
}
