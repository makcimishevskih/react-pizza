import { RootState } from '../store';

export const selectPizzas = (state: RootState) => {
  const { isError, isLoading, pizza } = state.pizzas;
  return { isError, isLoading, pizza };
};
export const selectSortPizzas = (state: RootState) => state.pizzas;

export const selectAllInfo = (state: RootState) => state.info;
export const selectAllInfoCategories = (state: RootState) => state.info.categories;
export const selectAllInfoDoughts = (state: RootState) => state.info.doughTypes;
export const selectAllInfoPizzaNames = (state: RootState) => state.info.sortNamePizzaKeys;
