import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../helpers/fetchData';
import { OrderT } from '../../hooks/useChangeSort';

import { PizzaT, DBInfoT, DBCartT, SortKeysT } from '../slices/type';

const getAllPizzas = createAsyncThunk('pizzas/getAllPizzas', async () => {
  return await getData<PizzaT[]>('items');
});
const getSortPizzas = createAsyncThunk(
  'pizzas/getSortPizzas',
  async (data: { sortType: keyof SortKeysT; orderType: OrderT }) => {
    const { sortType, orderType } = data;
    return await getData<PizzaT[]>(`items?sortBy=${sortType}&order=${orderType}`);
  },
);

const getAllInfo = createAsyncThunk('infos/getAllInfo', async () => {
  return await getData<Array<DBInfoT>>('infos');
});

const getAllCart = createAsyncThunk('cart/getAllCart', async () => {
  return await getData<Array<DBCartT>>('cart');
});

export const thunks = {
  getAllCart,
  getAllInfo,
  getAllPizzas,
  getSortPizzas,
};
