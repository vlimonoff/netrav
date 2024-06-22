import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  lastName: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  firstName: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  patronymic: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),

  birthDate: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),

  deathDate: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),

  birthPlace: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),

  deathPlace: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),

  otherInfo: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),

  wikiUrl: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),
});
