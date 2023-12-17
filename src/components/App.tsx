import Header from './Header';
import Pizzas from './Pizzas';
import Sorting from './Sorting';
import Categories from './Categories';
import useChangeSort from '../hooks/useChangeSort';

// APP
// !important refactor baseicon
function App() {
  const { sortType, sortIndex, handleSortName, handleToggleSort } = useChangeSort();

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sorting
              sortType={sortType}
              handleSortName={handleSortName}
              handleToggleSort={handleToggleSort}
            />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <Pizzas sortIndex={sortIndex} sortType={sortType} />
        </div>
      </div>
    </div>
  );
}

export default App;
