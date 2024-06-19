import { Box, Typography } from '@mui/material';
import { CreateArtistForm } from '../../components';

export const Form = () => {
  return (
    <Box sx={{ margin: '0 20vw' }}>
      <Typography variant="h6" fontWeight={600} marginLeft="16px">
        Добавление художника:
      </Typography>

      <CreateArtistForm />
    </Box>
  );
};
