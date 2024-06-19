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

import { Form } from './pages/form/form';
import { Navigation } from './components/navigation/navigation';
import { ArtistsList } from './components/artists-list';

import './styles.css';
import { Manual } from './pages/manual';

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
                  <Route path='/' element={<ArtistsList />} />
                  <Route path='/form' element={<Form />} />
                  <Route path='/manual' element={<Manual />} />
                  <Route path='*' element={<ArtistsList />} />
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
