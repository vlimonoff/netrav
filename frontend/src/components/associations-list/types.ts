import { IArtist, IArtmovements, IAssociation } from '../../types';

export interface IRowProps {
  row: IAssociation;
  checkedList: (IAssociation | IArtist | IArtmovements)[];
  setCheckedList: React.Dispatch<React.SetStateAction<(IAssociation | IArtist | IArtmovements)[]>>
  openModalEdit: (row: IAssociation) => void;
  openModalDelete: (row: IAssociation) => void;
}