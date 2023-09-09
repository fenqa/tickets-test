import { configureStore } from '@reduxjs/toolkit';
import ticketsSlice from './components/slices/ticketsSlice';
import currencySlice from './components/slices/currencySlice';

export const store = configureStore({
  reducer: {
    tickets: ticketsSlice,
    currency: currencySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
