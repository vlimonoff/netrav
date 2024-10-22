import { IColumn } from "../../types";

export const columns: IColumn[] = [
  {
    id: "title",
    label: "Наименование",
    width: 50,
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
    width: 150,
  },
  {
    id: "otherInfo",
    label: "Дополнительная информация",
    minWidth: 220,
  },
  {
    id: "owners",
    label: "Основатели",
    width: 100,
  },
  {
    id: "members",
    label: "Участники",
    width: 100,
    maxHeight: 50,
  },
];
