import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  workStart: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  workEnd: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  status: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  city: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  url: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  otherInfo: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),
  });
