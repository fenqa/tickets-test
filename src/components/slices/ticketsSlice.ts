import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { tickets } from '../../db/tickets.json';
import { RootState } from '../../store';

export interface ITicket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

interface TicketsState {
  tickets: ITicket[];
}

const initialState: TicketsState = {
  tickets: tickets,
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<Array<number>>) => {
      state.tickets = initialState.tickets.filter(({ stops }) =>
        action.payload.includes(stops)
      );
    },
    reset: (state) => {
      state.tickets = initialState.tickets;
    },
  },
});

export const { filter, reset } = ticketsSlice.actions;

export const selectTickets = (state: RootState) => state.tickets.tickets;

export default ticketsSlice.reducer;
