import { useMemo } from 'react';
import { DBT, sortNamesObj } from '../components/config';
import { compareValues } from '../helpers/compareValues';
import { SortT } from './useChangeSort';

export type Keys = Pick<DBT, 'rating' | 'price' | 'title'>;

export type PizzasProps = {
  sortIndex: number;
  sortType: SortT;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSort = <T extends Array<any>>(state: T, { sortType, sortIndex }: PizzasProps) => {
  const currentSortEn = useMemo(() => sortNamesObj[sortIndex], [sortIndex]) as keyof Keys;

  const sortedPizzesState =
    state &&
    (state
      .slice()
      .sort((a, b) =>
        sortType === 'asc'
          ? compareValues(a[currentSortEn], b[currentSortEn])
          : compareValues(b[currentSortEn], a[currentSortEn]),
      ) as T);

  return {
    sortedPizzesState,
  };
};

export default useSort;
