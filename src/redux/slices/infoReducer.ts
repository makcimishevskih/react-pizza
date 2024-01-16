import { createSlice } from '@reduxjs/toolkit';

import { thunks } from '../thunks/thunks';

import { DBInfoWithStatus, DBInfoT } from './type';

export const initialState: DBInfoWithStatus = {
  cart: [],
  doughTypes: [],
  categories: ['Все'],
  sortNamePizzaKeys: ['rating'],
  isLoading: false,
  isError: '',
};

const infoSlice = createSlice({
  name: 'infoSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.getAllInfo.fulfilled, (state, { payload }) => {
        const { cart, categories, doughTypes, sortNamePizzaKeys } = payload[0] as DBInfoT;

        state.isError = '';
        state.isLoading = false;

        state.cart = cart;
        state.categories = categories;
        state.doughTypes = doughTypes;
        state.sortNamePizzaKeys = sortNamePizzaKeys;
      })
      .addCase(thunks.getAllPizzas.pending, (state) => {
        state.isLoading = true;
        state.isError = '';
      })
      .addCase(thunks.getAllPizzas.rejected, (state) => {
        state.isLoading = false;
        state.isError = 'Error from getAllPizzas';
      });
  },
});

export default infoSlice.reducer;
