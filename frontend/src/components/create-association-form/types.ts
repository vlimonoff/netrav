import { FormikProps } from 'formik';

export interface IBaseForm {
  title: string;
  workStart: string;
  workEnd: string;
  status: string;
  city: string;
  url: string;
  otherInfo: string;
}

export type IBaseFormProps = FormikProps<IBaseForm>;

export type Props = {};
