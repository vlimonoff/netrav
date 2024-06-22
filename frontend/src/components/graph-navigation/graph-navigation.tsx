import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import { graphRoutes } from '../../routes';

import { styles } from './styles';

export const GraphNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (link: string): void => {
    navigate(link);
  };

  return (
    <Box sx={styles.wrapper}>
      {graphRoutes.map((route) => (
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
