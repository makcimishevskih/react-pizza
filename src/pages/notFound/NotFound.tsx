import css from './NotFound.module.scss';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={css.notFound}>
      <h1 className={css.notFound__title}>Страница не найдена</h1>
      <p className={css.notFound__text}>
        К сожалению, данная страница отсутсвует в нашем интернет-магазине
      </p>
      <Link to="/" className={css.notFound__homelink}>
        Назад
      </Link>
    </div>
  );
};

export default NotFound;
