import React, { FC, useEffect, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@mui/material';
import { IArtMovement, IBaseForm, IBaseFormProps, Props } from './types';
import { styles } from './styles';
import { useFormik } from 'formik';
import { dictionary } from './dictionary';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { endpoints } from '../../endpoints';
import { validationSchema } from './validationSchema';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export const CreateArtistForm: FC<Props> = (): React.ReactElement => {
  const [artMovements, setArtMovements] = useState<Array<IArtMovement>>([]);

  const baseForm: IBaseFormProps = useFormik<IBaseForm>({
    initialValues: {
      lastName: '',
      firstName: '',
      patronymic: '',
      isArtist: true,
      birthDate: '',
      birthPlace: '',
      deathDate: '',
      deathPlace: '',
      artMovements: [],
      otherInfo: '',
      wikiUrl: '',
    },
    validationSchema,
    onSubmit: async ({
      artMovements,
      lastName,
      firstName,
      patronymic,
      isArtist,
      birthDate,
      deathDate,
      birthPlace,
      deathPlace,
      otherInfo,
      wikiUrl,
    }) => {
      try {
        const response = await fetch(endpoints.ARTISTS, {
          method: 'POST',
          body: JSON.stringify({
            artMovements: artMovements.map((movement) => movement.id),
            lastName,
            firstName,
            patronymic,
            isArtist,
            birthDate,
            deathDate,
            birthPlace,
            deathPlace,
            otherInfo,
            wikiUrl,
          }),
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        });

        const data = await response.json();

        if (data) {
          setArtMovements(data);
        }
      } catch (error) {}
    },
  });

  const fetchArtMovements = async () => {
    try {
      const response = await fetch(endpoints.ART_MOVEMENTS);
      const data = await response.json();

      if (data) {
        setArtMovements(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchArtMovements();
  }, []);

  return (
    <Box
      component='form'
      sx={styles.form}
      autoComplete='off'
      onSubmit={baseForm.submitForm}
    >
      <Box sx={styles.row}>
        <TextField
          name='lastName'
          variant='outlined'
          onChange={baseForm.handleChange}
          value={baseForm.values.lastName}
          error={baseForm.touched.lastName && !!baseForm.errors.lastName}
          label={dictionary.lastName}
          helperText={baseForm.touched.lastName && baseForm.errors.lastName}
          sx={styles.field}
        />

        <TextField
          name='firstName'
          variant='outlined'
          onChange={baseForm.handleChange}
          value={baseForm.values.firstName}
          error={baseForm.touched.firstName && !!baseForm.errors.firstName}
          label={dictionary.firstName}
          helperText={baseForm.touched.firstName && baseForm.errors.firstName}
          sx={styles.field}
        />

        <TextField
          name='patronymic'
          variant='outlined'
          onChange={baseForm.handleChange}
          value={baseForm.values.patronymic}
          error={baseForm.touched.patronymic && !!baseForm.errors.patronymic}
          label={dictionary.patronymic}
          helperText={baseForm.touched.patronymic && baseForm.errors.patronymic}
          sx={styles.field}
        />
      </Box>

      <Box sx={styles.row}>
        <TextField
          name='birthDate'
          variant='outlined'
          onChange={baseForm.handleChange}
          value={baseForm.values.birthDate}
          error={baseForm.touched.birthDate && !!baseForm.errors.birthDate}
          label={dictionary.birthDate}
          helperText={baseForm.touched.birthDate && baseForm.errors.birthDate}
          sx={styles.field}
        />

        <TextField
          name='birthPlace'
          variant='outlined'
          onChange={baseForm.handleChange}
          value={baseForm.values.birthPlace}
          error={baseForm.touched.birthPlace && !!baseForm.errors.birthPlace}
          label={dictionary.birthPlace}
          helperText={baseForm.touched.birthPlace && baseForm.errors.birthPlace}
          sx={styles.field}
        />
      </Box>

      <Box sx={styles.row}>
        <TextField
          name='deathDate'
          variant='outlined'
          onChange={baseForm.handleChange}
          value={baseForm.values.deathDate}
          error={baseForm.touched.deathDate && !!baseForm.errors.deathDate}
          label={dictionary.deathDate}
          helperText={baseForm.touched.deathDate && baseForm.errors.deathDate}
          sx={styles.field}
        />

        <TextField
          name='deathPlace'
          variant='outlined'
          onChange={baseForm.handleChange}
          value={baseForm.values.deathPlace}
          error={baseForm.touched.deathPlace && !!baseForm.errors.deathPlace}
          label={dictionary.deathPlace}
          helperText={baseForm.touched.deathPlace && baseForm.errors.deathPlace}
          sx={styles.field}
        />
      </Box>

      <Box sx={styles.row}>
        <Autocomplete
          multiple
          fullWidth
          id='artMovements'
          options={artMovements}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li key={option.title} {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          onChange={(e, value) => {
            console.log(value);

            baseForm.setFieldValue('artMovements', value);
          }}
          renderInput={(params) => (
            <TextField
              name='artMovements'
              variant='outlined'
              {...params}
              error={
                baseForm.touched.artMovements && !!baseForm.errors.artMovements
              }
              label={dictionary.artMovements}
              helperText={
                baseForm.touched.artMovements && !!baseForm.errors.artMovements
              }
              sx={styles.field}
            />
          )}
        />
      </Box>

      <Box sx={styles.row}>
        <TextField
          name='otherInfo'
          variant='outlined'
          onChange={baseForm.handleChange}
          value={baseForm.values.otherInfo}
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
          name='wikiUrl'
          variant='outlined'
          onChange={baseForm.handleChange}
          value={baseForm.values.wikiUrl}
          error={baseForm.touched.wikiUrl && !!baseForm.errors.wikiUrl}
          label={dictionary.wikiUrl}
          helperText={baseForm.touched.wikiUrl && baseForm.errors.wikiUrl}
          sx={styles.field}
        />
      </Box>

      <Box sx={styles.row}>
        <FormControlLabel
          control={
            <Checkbox
              checked={baseForm.values.isArtist}
              onChange={(e) => {
                baseForm.setFieldValue('isArtist', e.target.checked, true);
              }}
            />
          }
          label={dictionary.isArtist}
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
  );
};
