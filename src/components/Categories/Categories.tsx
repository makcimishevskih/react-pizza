import { useAppSelector } from '../../redux/hooks';
import { selectAllInfoCategories } from '../../redux/selectors';

import Category from './component/Category';

type CategoriesProps = {
  currentIndex: number;
  handleIndex: (n: number) => void;
};

const Categories = ({ currentIndex, handleIndex }: CategoriesProps) => {
  const categories = useAppSelector(selectAllInfoCategories);

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
