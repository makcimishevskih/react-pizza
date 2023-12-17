import { ReactNode } from 'react';

type CategoryProps = {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
};

const Category = ({ isActive, children, onClick }: CategoryProps) => {
  const classes = isActive ? 'active' : '';

  return (
    <li onClick={onClick} className={classes}>
      {children}
    </li>
  );
};

export default Category;
