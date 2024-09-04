import ReactDOM from 'react-dom/client';
import { useState, useMemo } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ThemeProvider } from '@mui/material/styles';
import { ColorModeContext, getDesignTokens } from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PaletteMode, Paper, createTheme } from '@mui/material';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import ruLocale from 'date-fns/locale/ru';
import DateFnsUtils from '@date-io/date-fns';
import { Navigation } from './components/navigation/navigation';
import './styles.css';
import { Manual } from './pages/manual';
import { Graph1, Graph2, Graph3, Graph4, Graphs } from './pages/graphs';
import { Data } from './pages/data';
import { ArtistsList } from './components/artists-list';
import { CreateArtistForm } from './components';
import { AssociationsList } from './components/associations-list';
import { CreateAssociationForm } from './components/create-association-form';
import { ArtMovementsList } from './components/artmovements-list';
import { CreateArtMovementsForm } from './components/create-artmovements-form';
import { About } from './pages/about';
import { ScrollToTop } from './components/scrollToTop';

// how to use theme in components

// import { useContext } from 'react';
// import { useTheme } from '@mui/material/styles';

// const theme = useTheme();
// const colorMode = useContext(ColorModeContext);

// TODO: вынести шапку таблицы в отдельным компонент, использовать его в таблицах вместо текущей реализации

// TODO: погуглить как стилизовать скроллы, застилизовать скроллы в таблицах, применить цвета из темы mui (погуглить как это делать), скролл должен зависеть от текущей темы
// Как применить стили ко всем элементам: https://stackoverflow.com/questions/58755118/global-styles-with-react-and-material-ui

// TODO: добавить в строки таблицы чекбоксы, добавить чекбокс в шапку таблицы (реализоцию посмотреть на mui)

// TODO: добавить в строки таблицы иконки "Редактировать", "Удалить" (икноки взять на mui icons)

// TODO: придумать что делать с навигацией на вкладке "Методичка" на узком экране (менять позиционирование? выносить в отдельную кнопку-бургер? скрывать?)

// TODO: по клику на кнопку "Редактировать" в таблице открывать модальное окно с предзаполненной формой содержащей поля аналогичные форме создания текущей сущности (направления, художника или объединения), реализовать возможность редактирования полей формы и сохранение, добавить на форму кнопку "Отменить", при клику на которую закрывать модальное окно и не сохранять внесенные изменения, добавить кнопку "Очистить" (для очищения формы) и "Соxранить", при клике на которую отправлять запрос на сохранение внесенных изменений, отображать пользователю анимацию загрузки, при успешном ответе закрывать форму и обновлять таблицу

// TODO: по клику на кнопку "Удалить" в строке таблицы выводить пользователю модальное окно с сообщением "Вы уверены, что хотите удалить запись?", добавить кнопку "Отмена" (при клике на которую закрывать окно) и "Удалить" (при клике на которую отправлять запрос на удаление сущности, в случае успещного ответа обновлять таблицу и закрывать модальное окно, отображать анимацию загрузки во время отправки запроса)

// TODO: вместо вкладок "Добавить ..." отображать иконку "Добавить запить" где-нибудь в шапке таблицы (подобрать иконку на mui), при клике на которую открывать пользователю модальное окно с формой добавления новой сущности (перенести добавление сущности из отдельной страницы в модальное окно), форму оставить аналогичной текущим реализациям, при успешном добавлении сущности закрывать модальное окно и обновлять таблицу

// TODO: добавить общую для таблицы кнопку "Удалить" (где то рядом с кнопкой "Добавить запись"), при выборе строк в таблице чекбоксом отображать пользователю модальное окно с сообщением "Вы уверены, что хотите удалить {Кол-во выбранных записей} записей?"? далее повторить сценарий при клике на кнопку "Удалить" в строке таблицы

// TODO: поправить верстку таблиц, хотелось бы чтобы таблица имела боковые отступы от края окна браузера (небольшие, чтобы контент таблицы оставался читаемым)

// TODO: при переходе на вкладку принудительно скроллить страницу вверх

// TODO: НА БУДУЩЕЕ - добавить файл с настройками eslint

// TODO: НА БУДУЩЕЕ - при наведении на ячейку таблицы отображать пользователю кнопку "Редактировать" с использоватнием компонента Tooltip, если это возможно, или подумать над похожей на этот компонент реализацией

// TODO: НА БУДУЩЕЕ - подобрать библиотеку для создания графов на js, реализовать построение графов

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Paper className='root-wrapper'>
              <ScrollToTop />
                <Navigation />

                <Routes>
                  <Route path='/' element={<Manual />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/data' element={<Data />}>
                    <Route path='/data/artists' element={<ArtistsList />} />
                    <Route
                      path='/data/artists/create'
                      element={<CreateArtistForm />}
                    />
                    <Route
                      path='/data/associations'
                      element={<AssociationsList />}
                    />
                    <Route
                      path='/data/associations/create'
                      element={<CreateAssociationForm />}
                    />
                    <Route
                      path='/data/artmovements'
                      element={<ArtMovementsList />}
                    />
                    <Route
                      path='/data/artmovements/create'
                      element={<CreateArtMovementsForm />}
                    />
                  </Route>
                  <Route path='/graphs' element={<Graphs />}>
                    <Route path='/graphs/graph1' element={<Graph1 />} />
                    <Route path='/graphs/graph2' element={<Graph2 />} />
                    <Route path='/graphs/graph3' element={<Graph3 />} />
                    <Route path='/graphs/graph4' element={<Graph4 />} />
                  </Route>
                  <Route path='*' element={<Manual />} />
                </Routes>
              </Paper>
            </BrowserRouter>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </LocalizationProvider>
    </ColorModeContext.Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
