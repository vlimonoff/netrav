import { FormikProps } from "formik";
import { IArtmovements } from "../../types";

export interface IBaseForm {
  title: string;
  info: string;
}

export type IBaseFormProps = FormikProps<IBaseForm>;

export type Props = { 
  row?: IArtmovements | null; 
  action?: string 
};
