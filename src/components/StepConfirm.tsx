import { useSelector } from "react-redux";
import { RootState } from "~/store";
import maskCard from "~/utils/maskCard";

const StepConfirm = () => {
  const { phone, personal, bank } = useSelector(
    (state: RootState) => state.form
  );

  return (
    <div>
      <h2>Подтверждение данных</h2>
      <div>Телефон: {phone}</div>
      <div>Имя: {personal.firstName}</div>
      <div>Фамилия: {personal.lastName}</div>
      <div>Адрес: {personal.address}</div>
      <div>Город: {personal.city}</div>
      <div>Индекс: {personal.postalCode}</div>
      <div>Номер карты: {maskCard(bank.cardNumber)}</div>
      <div>
        Сумма: {bank.amount} {bank.currency}
      </div>
      <button onClick={() => (window.location.href = "/success")}>
        Всё верно
      </button>
    </div>
  );
};

export default StepConfirm;
