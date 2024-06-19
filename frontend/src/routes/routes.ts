interface IRoute {
  source: string;
  title: string;
}

export const routes: Array<IRoute> = [
  { source: '/', title: 'Данные' },
  { source: 'form', title: 'Добавить' },
  { source: '/manual', title: 'Методичка' },
  { source: '/graph1', title: 'Граф №1' },
  { source: '/graph2', title: 'Граф №2' },
  { source: '/graph3', title: 'Граф №3' },
  { source: '/graph4', title: 'Граф №4' },
];
