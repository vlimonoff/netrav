interface IRoute {
  source: string;
  title: string;
}

export const routes: Array<IRoute> = [
  { source: '/', title: 'Данные' },
  { source: 'form', title: 'Добавить' },
  { source: '/manual', title: 'Методичка' },
];
