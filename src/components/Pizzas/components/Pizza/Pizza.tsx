// import { PizzaT, doughTypes } from '../../../config';

import useToggle from '../../../../hooks/useToggle';
import { useAppSelector } from '../../../../redux/hooks';
import { selectAllInfoCategories } from '../../../../redux/selectors';
import { PizzaT } from '../../../../redux/slices/type';
import BaseIcon from '../../../../shared/BaseIcon';

const Pizza = ({ sizes, types, title, price, imageUrl }: PizzaT) => {
  const doughTypes = useAppSelector(selectAllInfoCategories);

  const { currentIndex: doughIndex, handleIndex: handleCategory } = useToggle(0);
  const { currentIndex: sizeIndex, handleIndex: handleSize } = useToggle(0);

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {/* DOUGHS */}
          {types.map((dough, i) => (
            <li
              key={dough}
              onClick={() => handleCategory(i)}
              className={doughIndex === i ? 'active' : ''}
            >
              {doughTypes[dough]}
            </li>
          ))}
        </ul>
        <ul>
          {/* SIZES */}
          {sizes.map((size, i) => (
            <li
              key={size}
              onClick={() => handleSize(i)}
              className={sizeIndex === i ? 'active' : ''}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <BaseIcon width={12} height={12} iconName="plus" color="orange" />
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
