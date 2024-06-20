import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  receivableAccount: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  artMovements: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  lastName: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  firstName: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  patronymic: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  birthDate: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  deathDate: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  birthPlace: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  deathPlace: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  otherInfo: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  wikiUrl: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),
});
