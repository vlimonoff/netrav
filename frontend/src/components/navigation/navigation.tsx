import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, IconButton, useTheme } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

import { ColorModeContext } from '../../theme';

import { styles } from './styles';
import { routes } from '../../routes';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const handleClick = (link: string): void => {
    navigate(link);
  };

  return (
    <Box sx={styles.wrapper}>
      {routes.map((route) => (
        <Button
          key={route.source}
          sx={styles.button}
          onClick={() => handleClick(route.source)}
          color={route.source.indexOf('data') >= 0 ? (location.pathname.indexOf('data') >= 0 ? 'primary' : 'secondary') : location.pathname === route.source ? 'primary' : 'secondary'}
          size='small'
        >
          {route.title}
        </Button>
      ))}

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
