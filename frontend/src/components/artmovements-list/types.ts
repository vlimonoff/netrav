import { IArtist, IArtmovements, IAssociation } from '../../types';

export interface IRowProps {
  row: IArtmovements;
  // checked: boolean;
  // onChange: () => void;
  checkedList: (IAssociation | IArtist | IArtmovements)[];
  setCheckedList: React.Dispatch<React.SetStateAction<(IAssociation | IArtist | IArtmovements)[]>>
  openModalEdit: (row: IArtmovements) => void;
  openModalDelete: (row: IArtmovements) => void;
}
