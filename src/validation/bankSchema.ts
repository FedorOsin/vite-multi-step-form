import * as Yup from "yup";
import luhnCheck from "~/utils/luhnCheck";

export const bankSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .test("len", "Введите ровно 16 цифр", (value) => {
      const cleanValue = value?.replaceAll(" ", "") || "";
      return cleanValue.length === 16;
    })
    .test("luhn", "Некорректный номер карты", (value) =>
      luhnCheck((value || "").replaceAll(" ", ""))
    )
    .required("Обязательное поле"),

  cvv: Yup.string()
    .matches(/^\d{3}$/, "Введите ровно 3 цифры")
    .required("Обязательное поле"),

  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Формат MM/YY")
    .required("Обязательное поле"),

  amount: Yup.string()
    .matches(/^\d+$/, "Только цифры")
    .min(1, "Минимум 1 символ")
    .max(10, "Максимум 10 символов")
    .required("Обязательное поле"),

  currency: Yup.string().required("Обязательное поле"),
});
