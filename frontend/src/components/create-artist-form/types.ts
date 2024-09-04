import { FormikProps } from 'formik';
import { IArtist } from '../../types';

export interface IArtMovement {
  id: number;
  title: string;
  info: string;
}

export interface IBaseForm {
  lastName: string;
  firstName: string;
  patronymic: string;
  isArtist: boolean;
  birthDate: string;
  birthPlace: string | null;
  deathDate: string;
  deathPlace: string | null;
  artMovements: Array<IArtMovement> ;
  otherInfo: string;
  wikiUrl: string;
}

export type IBaseFormProps = FormikProps<IBaseForm>;

export type Props = {
  row?: IArtist;
  action?: string;
};
