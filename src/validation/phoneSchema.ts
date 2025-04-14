import * as Yup from "yup";

export const phoneSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\+7\d{10}$/, "Номер должен быть формата +7XXXXXXXXXX")
    .required("Обязательное поле"),
});
