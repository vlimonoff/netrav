import React, { FC, useCallback, useEffect, useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Collapse,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { CheckBoxOutlineBlank, CheckBox, Close } from "@mui/icons-material";
import { IArtMovement, IBaseForm, IBaseFormProps, Props } from "./types";
import { styles } from "./styles";
import { useFormik } from "formik";
import { dictionary } from "./dictionary";
import { endpoints } from "../../endpoints";
import { validationSchema } from "./validationSchema";

export const CreateArtistForm: FC<Props> = ({
  row,
  action,
}): React.ReactElement => {
  const [artMovements, setArtMovements] = useState<Array<IArtMovement>>([]);
  const [open, setOpen] = useState<boolean>(false);

  console.log(row?.artMovements);

  const baseForm: IBaseFormProps = useFormik<IBaseForm>({
    initialValues: {
      lastName: row?.lastName || "",
      firstName: row?.firstName || "",
      patronymic: row?.patronymic || "",
      isArtist: row?.isArtist || true,
      birthDate: row?.birthDate || "",
      birthPlace: row?.birthPlace || "",
      deathDate: row?.deathDate || "",
      deathPlace: row?.deathPlace || "",
      artMovements: [],
      otherInfo: row?.otherInfo || "",
      wikiUrl: row?.wikiUrl || "",
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
          method: "POST",
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
            "content-type": "application/json;charset=UTF-8",
          },
        });

        await response.json();

        setOpen(true);
      } catch (error) {}
    },
  });

  const fetchArtMovements = useCallback(async () => {
    try {
      const response = await fetch(endpoints.ART_MOVEMENTS);
      const data = await response.json();

      if (data) {
        setArtMovements(data);
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchArtMovements();
  }, [fetchArtMovements]);

  useEffect(() => {
    console.log(1);

    baseForm.setFieldValue(
      "artMovements",
      artMovements.filter((artmovement) =>{
        console.log(artmovement.id);
        console.log(row?.artMovements.includes(artmovement.id));
        return row?.artMovements.includes(artmovement.id)}
      )
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artMovements, row?.artMovements]);

  return (
    <Box>
      {/* {!row && !action && (
        <Typography variant="h6" fontWeight={600} marginLeft="16px">
          {dictionary.header}
        </Typography>
      )} */}

      <Box
        component="form"
        sx={styles.form}
        autoComplete="off"
        onSubmit={baseForm.submitForm}
      >
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Close fontSize="inherit" />
              </IconButton>
            }
          >
            {dictionary.success}
          </Alert>
        </Collapse>

        <Box sx={styles.row}>
          <TextField
            name="lastName"
            variant="outlined"
            onChange={baseForm.handleChange}
            value={action ? baseForm.initialValues.lastName : baseForm.values.lastName}
            error={baseForm.touched.lastName && !!baseForm.errors.lastName}
            label={dictionary.lastName}
            helperText={baseForm.touched.lastName && baseForm.errors.lastName}
            sx={styles.field}
          />

          <TextField
            name="firstName"
            variant="outlined"
            onChange={baseForm.handleChange}
            value={action ? "" : baseForm.values.firstName}
            error={baseForm.touched.firstName && !!baseForm.errors.firstName}
            label={dictionary.firstName}
            helperText={baseForm.touched.firstName && baseForm.errors.firstName}
            sx={styles.field}
          />

          <TextField
            name="patronymic"
            variant="outlined"
            onChange={baseForm.handleChange}
            value={action ? "" : baseForm.values.patronymic}
            error={baseForm.touched.patronymic && !!baseForm.errors.patronymic}
            label={dictionary.patronymic}
            helperText={
              baseForm.touched.patronymic && baseForm.errors.patronymic
            }
            sx={styles.field}
          />
        </Box>

        <Box sx={styles.row}>
          <TextField
            name="birthDate"
            variant="outlined"
            onChange={baseForm.handleChange}
            value={action ? "" : baseForm.values.birthDate}
            error={baseForm.touched.birthDate && !!baseForm.errors.birthDate}
            label={dictionary.birthDate}
            helperText={baseForm.touched.birthDate && baseForm.errors.birthDate}
            sx={styles.field}
          />

          <TextField
            name="birthPlace"
            variant="outlined"
            onChange={baseForm.handleChange}
            value={action ? "" : baseForm.values.birthPlace}
            error={baseForm.touched.birthPlace && !!baseForm.errors.birthPlace}
            label={dictionary.birthPlace}
            helperText={
              baseForm.touched.birthPlace && baseForm.errors.birthPlace
            }
            sx={styles.field}
          />
        </Box>

        <Box sx={styles.row}>
          <TextField
            name="deathDate"
            variant="outlined"
            onChange={baseForm.handleChange}
            value={action ? "" : baseForm.values.deathDate}
            error={baseForm.touched.deathDate && !!baseForm.errors.deathDate}
            label={dictionary.deathDate}
            helperText={baseForm.touched.deathDate && baseForm.errors.deathDate}
            sx={styles.field}
          />

          <TextField
            name="deathPlace"
            variant="outlined"
            onChange={baseForm.handleChange}
            value={action ? "" : baseForm.values.deathPlace}
            error={baseForm.touched.deathPlace && !!baseForm.errors.deathPlace}
            label={dictionary.deathPlace}
            helperText={
              baseForm.touched.deathPlace && baseForm.errors.deathPlace
            }
            sx={styles.field}
          />
        </Box>

        <Box sx={styles.row}>
          <Autocomplete
            multiple
            fullWidth
            id="artMovements"
            options={artMovements}
            disableCloseOnSelect
            value={baseForm.values.artMovements}
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li key={option.title} {...props}>
                <Checkbox
                  icon={<CheckBoxOutlineBlank fontSize="small" />}
                  checkedIcon={<CheckBox fontSize="small" />}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            onChange={(e, value) => {
              console.log(value);
              
              baseForm.setFieldValue("artMovements", value);
            }}
            renderInput={(params) => (
              <TextField
                name="artMovements"
                variant="outlined"
                {...params}
                error={
                  baseForm.touched.artMovements &&
                  !!baseForm.errors.artMovements
                }
                label={dictionary.artMovements}
                helperText={
                  baseForm.touched.artMovements &&
                  !!baseForm.errors.artMovements
                }
                sx={styles.field}
              />
            )}
          />
        </Box>

        <Box sx={styles.row}>
          <TextField
            name="otherInfo"
            variant="outlined"
            onChange={baseForm.handleChange}
            value={action ? "" : baseForm.values.otherInfo}
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
            name="wikiUrl"
            variant="outlined"
            onChange={baseForm.handleChange}
            value={action ? "" : baseForm.values.wikiUrl}
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
                checked={action ? true : baseForm.values.isArtist}
                onChange={(e) => {
                  baseForm.setFieldValue("isArtist", e.target.checked, true);
                }}
              />
            }
            label={dictionary.isArtist}
          />
        </Box>

        {!row && !action && (
          <Box sx={styles.buttonsWrapper}>
            <Button
              variant="outlined"
              sx={styles.button}
              onClick={() => baseForm.resetForm()}
            >
              {dictionary.reset}
            </Button>
            <Button
              variant="contained"
              sx={styles.button}
              onClick={() => baseForm.handleSubmit()}
            >
              {dictionary.save}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
