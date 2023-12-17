import { useMemo, useState } from 'react';

import { sorts } from '../config';

import useToggle from '../../hooks/useToggle';

import BaseIcon from '../../shared/BaseIcon';
import { SortT } from '../../hooks/useChangeSort';

type SortingProps = {
  sortType: SortT;
  handleToggleSort: () => void;
  handleSortName: (sortName: number) => void;
};

const Sorting = ({ handleToggleSort, handleSortName }: SortingProps) => {
  const { currentIndex, handleIndex } = useToggle(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleClickItem = (index: number) => {
    handleIndex(index);
    handleSortName(index);
    setIsVisible(false);
  };

  const currentSort = useMemo(() => sorts[currentIndex], [currentIndex]);

  console.log();

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
            {sorts.map((el, i) => (
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
