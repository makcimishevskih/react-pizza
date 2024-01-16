import { useCallback, useState } from 'react';

export type OrderT = 'asc' | 'desc';

const useChangeSort = () => {
  const [orderType, setOrderType] = useState<OrderT>('asc');
  const [sortIndex, setSortIndex] = useState(0);

  const handleToggleSort = useCallback(() => {
    setOrderType((sort) => (sort === 'asc' ? 'desc' : 'asc'));
  }, []);

  const handleSortName = useCallback((index: number) => {
    setSortIndex(index);
  }, []);

  return {
    orderType,
    sortIndex,
    handleSortName,
    handleToggleSort,
  };
};

export default useChangeSort;
