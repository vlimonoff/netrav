import { IArtmovements } from '../../types';

export interface IRowProps {
  row: IArtmovements;
  checked: boolean;
  onChange: () => void;
  openModalEdit: (row: IArtmovements) => void;
  openModalDelete: (row: IArtmovements) => void;
}
