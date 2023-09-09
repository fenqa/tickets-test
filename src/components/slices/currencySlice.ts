import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface CurrencyState {
  currency: string;
  sign: string;
}

const initialState: CurrencyState = {
  currency: 'RUB',
  sign: '₽',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (
      state,
      {
        payload: { currency, sign },
      }: PayloadAction<{ currency: string; sign: string }>
    ) => {
      state.currency = currency;
      state.sign = sign;
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export const selectCurrency = (state: RootState) => state.currency.currency;

export default currencySlice.reducer;
