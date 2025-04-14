import * as Yup from "yup";

export const personalSchema = Yup.object().shape({
  firstName: Yup.string().required("Обязательное поле"),
  lastName: Yup.string().required("Обязательное поле"),
  address: Yup.string().required("Обязательное поле"),
  city: Yup.string().required("Обязательное поле"),
  postalCode: Yup.string().required("Обязательное поле"),
});
