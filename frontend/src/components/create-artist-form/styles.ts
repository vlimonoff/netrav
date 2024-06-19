import { outlinedInputClasses } from '@mui/material';

export const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    margin: '16px',
    padding: '16px',
    borderRadius: '8px',
  },

  row: {
    display: 'flex',
    gap: '16px',
    width: '100%',
    justifyContent: 'space-between',
  },

  field: {
    width: '100%',
    borderRadius: '8px',

    [`& .${outlinedInputClasses.root}`]: {
      borderRadius: '8px',
    },
  },

  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    justifyContent: 'end',
  },

  button: {
    padding: '12px 24px',
    borderRadius: '8px',
  },
};
