import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .required('Обязательное поле'),

  workStart: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),

  workEnd: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),

  status: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),

  city: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),

  url: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),

  otherInfo: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки'),
  });
