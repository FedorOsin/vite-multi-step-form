import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { nextStep, setPhone } from "~/store/formSlice";
import { phoneSchema } from "~/validation/phoneSchema";
import { checkPhone } from "~/api/phoneApi";
import { useState } from "react";

const StepPhoneForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{ phone: "" }}
      validationSchema={phoneSchema}
      onSubmit={async (values, { setFieldError }) => {
        setLoading(true);
        try {
          const isValid = await checkPhone(values.phone);
          if (isValid) {
            dispatch(setPhone(values.phone));
            dispatch(nextStep());
          } else {
            setFieldError("phone", "Телефон не найден");
          }
        } catch {
          setFieldError("phone", "Ошибка сервера");
        } finally {
          setLoading(false);
        }
      }}
    >
      <Form>
        <Field name="phone" placeholder="+7XXXXXXXXXX" />
        <ErrorMessage name="phone" component="div" />
        <button type="submit" disabled={loading}>
          {loading ? "Проверяем..." : "Проверить телефон"}
        </button>
      </Form>
    </Formik>
  );
};

export default StepPhoneForm;
