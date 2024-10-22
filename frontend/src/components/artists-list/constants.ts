import { IColumn } from "../../types";

export const columns: IColumn[] = [
  {
    id: "lastName",
    label: "Фамилия",
    width: 100,
  },
  {
    id: "firstName",
    label: "Имя",
    width: 100,
  },
  {
    id: "patronymic",
    label: "Отчество",
    width: 100,
  },
  {
    id: "birthDate",
    label: "Дата рождения",
    width: 150,
  },
  {
    id: "deathDate",
    label: "Дата смерти",
    width: 150,
  },
  {
    id: "artMovements",
    label: "Направления",
    width: 300,
    maxHeight: 113,
  },
];