import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import { dataRoutes } from '../../routes';

import { styles } from './styles';

export const DataNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (link: string): void => {
    navigate(link);
  };

  return (
    <Box sx={styles.wrapper}>
      {dataRoutes.map((route) => (
        <Button
          key={route.source}
          sx={styles.button}
          onClick={() => handleClick(route.source)}
          color={location.pathname === route.source ? 'primary' : 'secondary'}
          size='small'
        >
          {route.title}
        </Button>
      ))}
    </Box>
  );
};
