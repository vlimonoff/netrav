interface IRoute {
  source: string;
  title: string;
}

export const routes: Array<IRoute> = [
  { source: '/data/artists', title: 'Данные' },
  { source: '/', title: 'Методичка' },
  { source: '/graphs/graph1', title: 'Графы' },
  { source: '/about', title: 'О нас' },
];

export const dataRoutes: Array<IRoute> = [
  { source: '/data/artists', title: 'Художники' },
  { source: '/data/artists/create', title: 'Добавить художника' },
  { source: '/data/associations', title: 'Объединения' },
  { source: '/data/associations/create', title: 'Добавить объединение' },
];

export const graphRoutes: Array<IRoute> = [
  { source: '/graphs/graph1', title: 'Граф №1' },
  { source: '/graphs/graph2', title: 'Граф №2' },
  { source: '/graphs/graph3', title: 'Граф №3' },
  { source: '/graphs/graph4', title: 'Граф №4' },
];
