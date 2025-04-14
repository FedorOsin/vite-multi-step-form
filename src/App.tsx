import { useSelector } from "react-redux";
import { RootState } from "~/store";
import StepPhoneForm from "~/components/StepPhoneForm";
import StepPersonalForm from "~/components/StepPersonalForm";
import StepBankForm from "~/components/StepBankForm";
import StepConfirm from "~/components/StepConfirm";
import "~/App.css";

function App() {
  const step = useSelector((state: RootState) => state.form.step);

  return (
    <div className="container">
      <h1>Многоступенчатая форма</h1>
      <p>Шаг {step} из 4</p>

      <div className={step > 1 ? "disabled" : ""}>
        <StepPhoneForm />
      </div>

      <div className={step > 2 ? "disabled" : step === 2 ? "" : "hidden"}>
        <StepPersonalForm />
      </div>

      <div className={step > 3 ? "disabled" : step === 3 ? "" : "hidden"}>
        <StepBankForm />
      </div>

      {step === 4 && <StepConfirm />}
    </div>
  );
}

export default App;
