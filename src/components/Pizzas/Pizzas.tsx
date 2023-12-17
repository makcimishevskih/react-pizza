import useDataApi from '../../hooks/useDataApi';

import { SortT } from '../../hooks/useChangeSort';
import { DBT } from '../config';

import Pizza from './components/Pizza';
import useSort from '../../hooks/useSort';

export type PizzasProps = {
  sortIndex: number;
  sortType: SortT;
};

const Pizzas = ({ sortType, sortIndex }: PizzasProps) => {
  const { data: pizzasState } = useDataApi<DBT[]>('items', []);

  const { sortedPizzesState } = useSort<DBT[]>(pizzasState, { sortType, sortIndex });

  return (
    <div className="content__items">
      {sortedPizzesState && sortedPizzesState.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
    </div>
  );
};

export default Pizzas;
