import { useCallback, useState } from 'react';

export type SortT = 'asc' | 'desc';

const useChangeSort = () => {
  const [sortType, setSortType] = useState<SortT>('asc');
  const [sortIndex, setSortIndex] = useState(0);

  const handleToggleSort = useCallback(() => {
    setSortType((sort) => (sort === 'asc' ? 'desc' : 'asc'));
  }, []);

  const handleSortName = useCallback((index: number) => {
    setSortIndex(index);
  }, []);

  return {
    sortType,
    sortIndex,
    handleSortName,
    handleToggleSort,
  };
};

export default useChangeSort;
