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
      <Form>
        {[
          "firstName",
          "lastName",
          "address",
          "city",
          "postalCode",
          "company",
          "info",
          "comment",
        ].map((field) => (
          <div key={field}>
            <Field name={field} placeholder={field} />
            <ErrorMessage name={field} component="div" />
          </div>
        ))}
        <button type="submit">Далее</button>
      </Form>
    </Formik>
  );
};

export default StepPersonalForm;
