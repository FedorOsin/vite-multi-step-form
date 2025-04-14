import * as Yup from "yup";
import luhnCheck from "~/utils/luhnCheck";

export const bankSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, "Введите 16 цифр")
    .test("luhn", "Некорректный номер карты", (value) => luhnCheck(value || ""))
    .required("Обязательное поле"),
  cvv: Yup.string()
    .matches(/^\d{3}$/, "Введите 3 цифры")
    .required("Обязательное поле"),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "ММ/YY")
    .required("Обязательное поле"),
  amount: Yup.string().required("Обязательное поле"),
  currency: Yup.string().required("Обязательное поле"),
});
