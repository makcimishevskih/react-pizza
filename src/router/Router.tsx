import { Route, Routes } from 'react-router-dom';
import Content from '../pages/home';
import Cart from '../pages/cart';
import NotFound from '../pages/notFound';

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/pizzas/:id"  /> */}
    </Routes>
  );
};

export default MyRouter;
