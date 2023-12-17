import { useEffect, useState } from 'react';
import useToggle from '../../hooks/useToggle';

import Category from './component/Category';

import cats from '../config';

const Categories = () => {
  const [categories, setCategories] = useState<string[] | null>(null);

  const { currentIndex, handleIndex } = useToggle(0);

  useEffect(() => {
    setCategories(cats);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="categories">
      <ul>
        {categories &&
          categories.map((el, i) => (
            <Category key={el} isActive={currentIndex === i} onClick={() => handleIndex(i)}>
              {el}
            </Category>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
