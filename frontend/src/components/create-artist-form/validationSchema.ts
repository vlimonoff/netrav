import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  receivableAccount: Yup.string()
    .trim('Пробелы недопустимы в начале и конце строки')
    .strict(true)
    .max(30, 'Счет не может превышать 30 цифр')
    .required('Обязательное поле'),
});
