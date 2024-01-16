import { useMemo, useState } from 'react';
import useToggle from '../../hooks/useToggle';

import BaseIcon from '../../shared/BaseIcon';
// import { OrderT } from '../../hooks/useChangeSort';

type SortingProps = {
  handleToggleSort: () => void;
  handleSortName: (sortName: number) => void;
};

const renderSorts = ['популярности', 'цене', 'алфавиту'];

const Sorting = ({ handleToggleSort, handleSortName }: SortingProps) => {
  const { currentIndex, handleIndex } = useToggle(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleClickItem = (index: number) => {
    handleIndex(index);
    handleSortName(index);
    setIsVisible(false);
  };

  const currentSort = useMemo(() => renderSorts[currentIndex], [currentIndex]);

  return (
    <div className="sort">
      <div className="sort__label">
        <BaseIcon iconName="arrow" width={12} height={6} color="black" className="rotate" />
        <b onClick={handleToggleSort}>Сортировка по:</b>
        <span onClick={() => setIsVisible((prev) => !prev)}>{currentSort}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {renderSorts.map((el, i) => (
              <li
                key={el}
                onClick={() => handleClickItem(i)}
                className={currentIndex === i ? 'active' : ''}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sorting;
