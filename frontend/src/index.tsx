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
import { Graph1, Graph2, Graph3, Graph4 } from './pages/graphs';
import { Data } from './pages/data';

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
                  <Route path='/data' element={<Data />} />
                  <Route path='/graph1' element={<Graph1 />} />
                  <Route path='/graph2' element={<Graph2 />} />
                  <Route path='/graph3' element={<Graph3 />} />
                  <Route path='/graph4' element={<Graph4 />} />
                  <Route path='*' element={<Data />} />
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
