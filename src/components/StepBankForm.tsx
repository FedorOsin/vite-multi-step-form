import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { nextStep, setBank } from "~/store/formSlice";
import { bankSchema } from "~/validation/bankSchema";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StepBankForm = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState<Date | null>(null);

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  return (
    <Formik
      initialValues={{
        cardNumber: "",
        cvv: "",
        expiryDate: "",
        amount: "",
        currency: "RUB",
      }}
      validationSchema={bankSchema}
      onSubmit={(values) => {
        console.log("SUBMIT VALUES:", values);
        dispatch(
          setBank({
            ...values,
            cardNumber: values.cardNumber.replaceAll(" ", ""),
          })
        );
        dispatch(nextStep());
      }}
    >
      {({ values, setFieldValue, isValid }) => (
        <Form className="card">
          <Field
            name="cardNumber"
            placeholder="Номер карты"
            value={values.cardNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFieldValue("cardNumber", formatCardNumber(e.target.value))
            }
          />
          <ErrorMessage name="cardNumber" component="div" />

          <Field name="cvv" placeholder="CVV" maxLength={3} />
          <ErrorMessage name="cvv" component="div" />

          <DatePicker
            selected={date}
            onChange={(date) => {
              setDate(date);
              if (date) {
                const month = `${date.getMonth() + 1}`.padStart(2, "0");
                const year = `${date.getFullYear()}`.slice(-2);
                setFieldValue("expiryDate", `${month}/${year}`);
              }
            }}
            dateFormat="MM/yy"
            showMonthYearPicker
            placeholderText="MM/YY"
          />
          <Field name="expiryDate" placeholder="MM/YY" maxLength={5} />
          <ErrorMessage name="expiryDate" component="div" />

          <Field name="amount" placeholder="Сумма" maxLength={10} />
          <ErrorMessage name="amount" component="div" />

          <Field as="select" name="currency">
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </Field>

          <button type="submit" disabled={!isValid}>
            Далее
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default StepBankForm;
