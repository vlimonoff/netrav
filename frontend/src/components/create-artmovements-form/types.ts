import { FormikProps } from 'formik';

export interface IBaseForm {
  title: string;
  info: string;
}

export type IBaseFormProps = FormikProps<IBaseForm>;

export type Props = {};