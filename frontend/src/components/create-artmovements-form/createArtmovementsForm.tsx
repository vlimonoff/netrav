import React, { FC, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Collapse,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { IBaseForm, IBaseFormProps, Props } from './types';
import { useFormik } from 'formik';
import { dictionary } from './dictionary';
import { endpoints } from '../../endpoints';
import { validationSchema } from './validationSchema';
import { styles } from './styles';

export const CreateArtMovementsForm: FC<Props> = (): React.ReactElement => {
    const [open, setOpen] = useState<boolean>(false);
    
    const baseForm: IBaseFormProps = useFormik<IBaseForm>({
        initialValues: {
          title: '',
          info: '',
        },
        validationSchema,
    
        onSubmit: async (formData) => {
          try {
            const response = await fetch(endpoints.ART_MOVEMENTS, {
              method: 'POST',
              body: JSON.stringify(formData),
              headers: {
                'content-type': 'application/json;charset=UTF-8',
              },
            });
    
            await response.json();
    
            setOpen(true);
          } catch (error) {}
        },
      });

      return (
        <Box sx={styles.container}>
          <Typography variant='h6' fontWeight={600} marginLeft='16px'>
            {dictionary.header}
          </Typography>
          <Box
            component='form'
            sx={styles.form}
            autoComplete='off'
            onSubmit={baseForm.submitForm}
          >
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label='close'
                    color='inherit'
                    size='small'
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <Close fontSize='inherit' />
                  </IconButton>
                }
              >
                {dictionary.success}
              </Alert>
            </Collapse>
    
            <Box sx={styles.row}>
              <TextField
                name='title'
                variant='outlined'
                onChange={baseForm.handleChange}
                value={baseForm.values.title}
                error={baseForm.touched.title && !!baseForm.errors.title}
                label={dictionary.title}
                helperText={baseForm.touched.title && baseForm.errors.title}
                sx={styles.field}
              />
            </Box>
    
            <Box sx={styles.row}>
              <TextField
                name='info'
                variant='outlined'
                onChange={baseForm.handleChange}
                value={baseForm.values.info}
                error={baseForm.touched.info && !!baseForm.errors.info}
                label={dictionary.info}
                helperText={baseForm.touched.info && baseForm.errors.info}
                sx={styles.field}
                rows={4}
                multiline
              />
            </Box>
    
            <Box sx={styles.buttonsWrapper}>
              <Button
                variant='outlined'
                sx={styles.button}
                onClick={() => baseForm.resetForm()}
              >
                {dictionary.reset}
              </Button>
              <Button
                variant='contained'
                sx={styles.button}
                onClick={() => baseForm.handleSubmit()}
              >
                {dictionary.save}
              </Button>
            </Box>
          </Box>
        </Box>
      );
};
