import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { nextStep, setPersonal } from "~/store/formSlice";
import { personalSchema } from "~/validation/personalSchema";

const StepPersonalForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        company: "",
        info: "",
        comment: "",
      }}
      validationSchema={personalSchema}
      onSubmit={(values) => {
        dispatch(setPersonal(values));
        dispatch(nextStep());
      }}
    >
      {({ values, setFieldValue, isValid }) => (
        <Form>
          <Field
            name="firstName"
            placeholder="First Name"
            maxLength={20}
            value={values.firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFieldValue("firstName", e.target.value.toUpperCase())
            }
          />
          <ErrorMessage name="firstName" component="div" />

          <Field
            name="lastName"
            placeholder="Last Name"
            maxLength={20}
            value={values.lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFieldValue("lastName", e.target.value.toUpperCase())
            }
          />
          <ErrorMessage name="lastName" component="div" />

          <Field name="address" placeholder="Address" maxLength={50} />
          <ErrorMessage name="address" component="div" />

          <Field name="city" placeholder="City" maxLength={30} />
          <ErrorMessage name="city" component="div" />

          <Field name="postalCode" placeholder="Postal Code" maxLength={10} />
          <ErrorMessage name="postalCode" component="div" />

          <Field
            name="company"
            placeholder="Company (необязательно)"
            maxLength={30}
          />
          <Field
            name="info"
            placeholder="Additional Info (необязательно)"
            maxLength={50}
          />
          <Field
            name="comment"
            placeholder="Comment (необязательно)"
            maxLength={50}
          />

          <button type="submit" disabled={!isValid}>
            Далее
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default StepPersonalForm;
