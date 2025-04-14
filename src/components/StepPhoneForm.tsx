import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { nextStep, setPhone } from "~/store/formSlice";
import { phoneSchema } from "~/validation/phoneSchema";
import { checkPhone } from "~/api/phoneApi";

const StepPhoneForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ phone: "" }}
      validationSchema={phoneSchema}
      onSubmit={async (values, { setFieldError }) => {
        const isValid = await checkPhone(values.phone);
        if (isValid) {
          dispatch(setPhone(values.phone));
          dispatch(nextStep());
        } else {
          setFieldError("phone", "Телефон не найден в базе");
        }
      }}
    >
      <Form>
        <Field name="phone" placeholder="+7XXXXXXXXXX" />
        <ErrorMessage name="phone" component="div" />
        <button type="submit">Проверить телефон</button>
      </Form>
    </Formik>
  );
};

export default StepPhoneForm;
