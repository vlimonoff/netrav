import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    title: Yup.string()
      .trim('Пробелы недопустимы в начале и конце строки')
      .strict(true)
      .required('Обязательное поле'),
  
    info: Yup.string()
      .trim('Пробелы недопустимы в начале и конце строки'),
    });