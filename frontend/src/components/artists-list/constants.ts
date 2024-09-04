import { IColumn } from "../../types";
import { GridColDef } from "@mui/x-data-grid";

export const columns: IColumn[] = [
  {
    id: "lastName",
    label: "Фамилия",
  },
  {
    id: "firstName",
    label: "Имя",
  },
  {
    id: "patronymic",
    label: "Отчество",
  },
  {
    id: "birthDate",
    label: "Дата рождения",
  },
  {
    id: "deathDate",
    label: "Дата смерти",
  },
];

export interface Artist {
  id:number;
  lastName: string | null;
  firstName: string | null;
  patronymic: string | null;
  birthDate: string | null;
  deathDate: string | null;
  birthPlace: string | null;
  deathPlace: string | null;
  // deleteButton: JSX.Element;
  // editButton: JSX.Element;
}

export const columnsForDataGrid: GridColDef[] = [
  {
    field: "lastName",
    headerName: "Фамилия",
    width: 120,
    valueGetter: (value: string) => {
      if (value === "") value = "-";
    },
  },
  {
    field: "firstName",
    headerName: "Имя",
    width: 110,
    valueGetter: (value: string) => {
      if (value === "") value = "-";
    },
  },
  {
    field: "patronymic",
    headerName: "Отчество",
    width: 120,
    valueGetter: (value: string) => {
      if (value === "") value = "-";
    },
  },
  {
    field: "birthDate",
    headerName: "Дата рождения",
    width: 120,
    valueGetter: (value: string) => {
      if (value === "") value = "-";
    },
  },
  {
    field: "deathDate",
    headerName: "Дата смерти",
    width: 90,
    valueGetter: (value: string) => {
      if (value === "") value = "-";
    },
  },
  // {
  //   field: "deleteButton",
  //   headerName: "",
  //   width: 90,
  // },
  // {
  //   field: "editButton",
  //   headerName: "",
  //   width: 90,
  // },
];
