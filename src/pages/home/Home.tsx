import useToggle from '../../hooks/useToggle';
import useChangeSort from '../../hooks/useChangeSort';
import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { thunks } from '../../redux/thunks/thunks';

import Pizzas from '../../components/Pizzas';
import Sorting from '../../components/Sorting';
import Categories from '../../components/Categories';

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunks.getAllInfo());
    dispatch(thunks.getAllPizzas());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // SORTING PIZZAS
  const { orderType, sortIndex, handleSortName, handleToggleSort } = useChangeSort();
  // <CATEGORIES> && <PIZZAS> FILTER CATEGORIES
  const { currentIndex: currentCategoryIndex, handleIndex: handleCategoryIndex } = useToggle(0);

  return (
    <>
      <div className="content__top">
        <Categories currentIndex={currentCategoryIndex} handleIndex={handleCategoryIndex} />
        <Sorting handleSortName={handleSortName} handleToggleSort={handleToggleSort} />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <Pizzas sortIndex={sortIndex} orderType={orderType} filterIndex={currentCategoryIndex} />
    </>
  );
}

export default Home;
