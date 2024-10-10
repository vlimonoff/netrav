import React, { FC, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Collapse,
  IconButton,
  TextField,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { IBaseForm, IBaseFormProps, Props } from './types';
import { styles } from './styles';
import { useFormik } from 'formik';
import { dictionary } from './dictionary';
import { endpoints } from '../../endpoints';
import { validationSchema } from './validationSchema';

export const CreateAssociationForm: FC<Props> = ({
  row,
  action,
}): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const baseForm: IBaseFormProps = useFormik<IBaseForm>({
    initialValues: {
      title: row?.title || '',
      workStart: row?.workStart || '',
      workEnd: row?.workEnd || '',
      status: row?.status || '',
      city: row?.city || '',
      url: row?.url || '',
      otherInfo: row?.otherInfo || '',
    },
    validationSchema,

    onSubmit: async (formData) => {
      try {
        const response = await fetch(endpoints.ASSOCIATIONS, {
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
    <Box>
      {/* <Typography variant='h6' fontWeight={600} marginLeft='16px'>
        {dictionary.header}
      </Typography> */}
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
            value={action ? baseForm.initialValues.title : baseForm.values.title}
            error={baseForm.touched.title && !!baseForm.errors.title}
            label={dictionary.title}
            helperText={baseForm.touched.title && baseForm.errors.title}
            sx={styles.field}
          />
        </Box>

        <Box sx={styles.row}>
          <TextField
            name='workStart'
            variant='outlined'
            onChange={baseForm.handleChange}
            value={action ? baseForm.initialValues.workStart : baseForm.values.workStart}
            error={baseForm.touched.workStart && !!baseForm.errors.workStart}
            label={dictionary.workStart}
            helperText={baseForm.touched.workStart && baseForm.errors.workStart}
            sx={styles.field}
          />

          <TextField
            name='workEnd'
            variant='outlined'
            onChange={baseForm.handleChange}
            value={action ? baseForm.initialValues.workEnd : baseForm.values.workEnd}
            error={baseForm.touched.workEnd && !!baseForm.errors.workEnd}
            label={dictionary.workEnd}
            helperText={baseForm.touched.workEnd && baseForm.errors.workEnd}
            sx={styles.field}
          />
        </Box>

        <Box sx={styles.row}>
          <TextField
            name='status'
            variant='outlined'
            onChange={baseForm.handleChange}
            value={action ? baseForm.initialValues.status : baseForm.values.status}
            error={baseForm.touched.status && !!baseForm.errors.status}
            label={dictionary.status}
            helperText={baseForm.touched.status && baseForm.errors.status}
            sx={styles.field}
          />

          <TextField
            name='city'
            variant='outlined'
            onChange={baseForm.handleChange}
            value={action ? baseForm.initialValues.city : baseForm.values.city}
            error={baseForm.touched.city && !!baseForm.errors.city}
            label={dictionary.city}
            helperText={baseForm.touched.city && baseForm.errors.city}
            sx={styles.field}
          />
        </Box>

        <Box sx={styles.row}>
          <TextField
            name='otherInfo'
            variant='outlined'
            onChange={baseForm.handleChange}
            value={action ? baseForm.initialValues.otherInfo : baseForm.values.otherInfo}
            error={baseForm.touched.otherInfo && !!baseForm.errors.otherInfo}
            label={dictionary.otherInfo}
            helperText={baseForm.touched.otherInfo && baseForm.errors.otherInfo}
            sx={styles.field}
            rows={4}
            multiline
          />
        </Box>

        <Box sx={styles.row}>
          <TextField
            name='url'
            variant='outlined'
            onChange={baseForm.handleChange}
            value={action ? baseForm.initialValues.url : baseForm.values.url}
            error={baseForm.touched.url && !!baseForm.errors.url}
            label={dictionary.url}
            helperText={baseForm.touched.url && baseForm.errors.url}
            sx={styles.field}
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
