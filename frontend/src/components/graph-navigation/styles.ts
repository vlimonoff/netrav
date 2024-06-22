import { Theme } from '@mui/material';

export const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    margin: '0',
    backgroundColor: (theme: Theme) => theme.palette.background.default,
    height: '50px',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
    fontSize: '16px',
  },

  button: {
    padding: '12px 24px',
    height: '50px',
  },
};
