import { IColumn } from "../../types";

export const columns: IColumn[] = [
  {
    id: "title",
    label: "Наименование",
  },
  {
    id: "workStart",
    label: "Период работы",
    minWidth: 100,
  },
  {
    id: "status",
    label: "Статус",
  },
  {
    id: "city",
    label: "Город",
  },
  {
    id: "otherInfo",
    label: "Дополнительная информация",
    minWidth: 300,
  },
  {
    id: "owners",
    label: "Основатели",
  },
  {
    id: "members",
    label: "Участники",
  },
];
