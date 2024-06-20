interface IRoute {
  source: string;
  title: string;
}

export const routes: Array<IRoute> = [
  { source: '/data/artists', title: 'Данные' },
  { source: '/manual', title: 'Методичка' },
  { source: '/graph1', title: 'Граф №1' },
  { source: '/graph2', title: 'Граф №2' },
  { source: '/graph3', title: 'Граф №3' },
  { source: '/graph4', title: 'Граф №4' },
];

export const dataRoutes: Array<IRoute> = [
  { source: '/data/artists', title: 'Художники' },
  { source: '/data/artists/create', title: 'Добавить художника' },
  { source: '/data/associations', title: 'Объединения' },
  { source: '/data/associations/create', title: 'Добавить объединение' },
];
