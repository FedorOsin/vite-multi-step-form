import { useSelector } from "react-redux";
import { RootState } from "~/store";
import StepPhoneForm from "~/components/StepPhoneForm";
import StepPersonalForm from "~/components/StepPersonalForm";
import StepBankForm from "~/components/StepBankForm";
import StepConfirm from "~/components/StepConfirm";

function App() {
  const step = useSelector((state: RootState) => state.form.step);

  return (
    <div style={{ padding: 20 }}>
      <h1>Многоступенчатая форма</h1>
      <p>Шаг {step} из 4</p>

      {step === 1 && <StepPhoneForm />}
      {step === 2 && <StepPersonalForm />}
      {step === 3 && <StepBankForm />}
      {step === 4 && <StepConfirm />}
    </div>
  );
}

export default App;
