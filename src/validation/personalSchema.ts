import * as Yup from "yup";

export const personalSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Z]+$/, "Только латиница и заглавные буквы")
    .min(2, "Минимум 2 символа")
    .max(20, "Максимум 20 символов")
    .required("Обязательное поле"),

  lastName: Yup.string()
    .matches(/^[A-Z]+$/, "Только латиница и заглавные буквы")
    .min(2, "Минимум 2 символа")
    .max(20, "Максимум 20 символов")
    .required("Обязательное поле"),

  address: Yup.string()
    .min(5, "Минимум 5 символов")
    .max(50, "Максимум 50 символов")
    .required("Обязательное поле"),

  city: Yup.string()
    .min(2, "Минимум 2 символа")
    .max(30, "Максимум 30 символов")
    .required("Обязательное поле"),

  postalCode: Yup.string()
    .matches(/^\d{5,10}$/, "Только цифры, от 5 до 10")
    .required("Обязательное поле"),
});
