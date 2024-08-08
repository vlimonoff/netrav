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

// how to use theme in components

// import { useContext } from 'react';
// import { useTheme } from '@mui/material/styles';

// const theme = useTheme();
// const colorMode = useContext(ColorModeContext);

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
                <Navigation />

                <Routes>
                  <Route path='/' element={<Manual />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/data' element={<Data />}>
                    <Route path='/data/artists' element={<ArtistsList />} />
                    <Route path='/data/artists/create' element={<CreateArtistForm />} />
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
