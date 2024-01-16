import { useMemo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import { OrderT } from './useChangeSort';
import { SortKeysT } from '../redux/slices/type';

import { selectAllInfoPizzaNames, selectSortPizzas } from '../redux/selectors';
import { thunks } from '../redux/thunks/thunks';

export type PizzasProps = {
  sortIndex: number;
  orderType: OrderT;
};

const useSort = ({ orderType, sortIndex }: PizzasProps) => {
  const sortNamePizzaKeys = useAppSelector(selectAllInfoPizzaNames);
  const sortedPizzasState = useAppSelector(selectSortPizzas);

  const currentSortEn = useMemo(
    () => sortNamePizzaKeys[sortIndex],
    [sortIndex, sortNamePizzaKeys],
  ) as keyof SortKeysT;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunks.getSortPizzas({ sortType: currentSortEn, orderType }));
  }, [orderType, currentSortEn, dispatch]);

  return {
    sortedPizzasState: sortedPizzasState.pizza,
  };
};

export default useSort;
