import useSort from '../../hooks/useSort';
import { useMemo } from 'react';
import { useAppSelector } from '../../redux/hooks';

import { OrderT } from '../../hooks/useChangeSort';
import { PizzaT } from '../../redux/slices/type';
import { selectPizzas } from '../../redux/selectors';

import Pizza from './components/Pizza';
import PizzasSkeleton from './components/PizzaSkeleton/PizzasSkeleton';

export type PizzasProps = {
  // sortType: string;
  orderType: OrderT;
  sortIndex: number;
  filterIndex: number;
};

const Pizzas = ({ orderType, sortIndex, filterIndex }: PizzasProps) => {
  const { pizza, isLoading, isError } = useAppSelector(selectPizzas);

  const { sortedPizzasState } = useSort({ orderType, sortIndex });
  // const { sortedPizzasState } = useSort<PizzaT[]>(pizza, { orderType, sortIndex });

  const filterPizzas: PizzaT[] =
    filterIndex === 0
      ? sortedPizzasState
      : sortedPizzasState.filter((el) => el.category === filterIndex);

  // Скелетон работает? Проверить
  const skeleton = useMemo(() => new Array(6).map((_, i) => <PizzasSkeleton key={i} />), []);

  return (
    <div className="content__items">
      {!isLoading && isError && <div>Error: {isError}</div>}

      {isLoading || pizza.length === 0
        ? skeleton
        : filterPizzas && filterPizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
    </div>
  );
};

export default Pizzas;
