import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, IconButton, useTheme } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

import { ColorModeContext } from '../../theme';

import { dictionary } from './dictionary';
import { styles } from './styles';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const handleClick = (link: string): void => {
    navigate(link);
  };

  // TODO: вынести маршруты в константы
  // TODO: написать функцию для определения варианта отображения кнопки, вынести в utils
  // TODO: вынести стили в отдельный файл styles
  // TODO: типизировать компонент

  return (
    <Box sx={styles.wrapper}>
      <Button
        sx={styles.button}
        onClick={() => handleClick('/')}
        color={location.pathname === '/' ? 'primary' : 'secondary'}
        size='small'
      >
        {dictionary.list}
      </Button>

      <Button
        sx={styles.button}
        onClick={() => handleClick('/form')}
        color={location.pathname === '/form' ? 'primary' : 'secondary'}
        size='small'
      >
        {dictionary.create}
      </Button>

      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'light' ? (
          <LightMode color='secondary' />
        ) : (
          <DarkMode color='secondary' />
        )}
      </IconButton>
    </Box>
  );
};
