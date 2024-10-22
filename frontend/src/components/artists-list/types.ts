import { IArtist, IArtmovements, IAssociation } from '../../types';

export interface IRowProps {
  row: IArtist;
  // checked: boolean;
  // onChange: () => void;
  checkedList: (IAssociation | IArtist | IArtmovements)[];
  setCheckedList: React.Dispatch<React.SetStateAction<(IAssociation | IArtist | IArtmovements)[]>>
  openModalEdit: (row: IArtist) => void;
  openModalDelete: (row: IArtist) => void;
}