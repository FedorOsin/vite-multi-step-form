import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { nextStep, setBank } from "~/store/formSlice";
import { bankSchema } from "~/validation/bankSchema";

const StepBankForm = () => {
  const dispatch = useDispatch();

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
        dispatch(setBank(values));
        dispatch(nextStep());
      }}
    >
      <Form>
        <Field name="cardNumber" placeholder="Номер карты" />
        <ErrorMessage name="cardNumber" component="div" />

        <Field name="cvv" placeholder="CVV" />
        <ErrorMessage name="cvv" component="div" />

        <Field name="expiryDate" placeholder="MM/YY" />
        <ErrorMessage name="expiryDate" component="div" />

        <Field name="amount" placeholder="Сумма" />
        <ErrorMessage name="amount" component="div" />

        <Field as="select" name="currency">
          <option value="RUB">RUB</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Field>

        <button type="submit">Далее</button>
      </Form>
    </Formik>
  );
};

export default StepBankForm;
