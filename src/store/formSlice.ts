import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PersonalData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  company?: string;
  info?: string;
  comment?: string;
}

interface BankData {
  cardNumber: string;
  cvv: string;
  expiryDate: string;
  amount: string;
  currency: string;
}

interface FormState {
  step: number;
  phone: string;
  personal: PersonalData;
  bank: BankData;
}

const initialState: FormState = {
  step: 1,
  phone: "",
  personal: {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    company: "",
    info: "",
    comment: "",
  },
  bank: {
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    amount: "",
    currency: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPersonal: (state, action: PayloadAction<PersonalData>) => {
      state.personal = action.payload;
    },
    setBank: (state, action: PayloadAction<BankData>) => {
      state.bank = action.payload;
    },
  },
});

export const { nextStep, prevStep, setPhone, setPersonal, setBank } =
  formSlice.actions;
export default formSlice.reducer;
