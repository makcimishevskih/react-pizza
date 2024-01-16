export type CategoriesT = 'Все' | 'Мясные' | 'Вегетарианская' | 'Гриль' | 'Острые' | 'Закрытые';

export type StatusT = {
  isLoading: boolean;
  isError: string;
};

export type PizzaT = {
  id: number;
  title: string;
  price: number;
  rating: number;
  types: number[];
  sizes: number[];
  imageUrl: string;
  category: number;
};

// PIZZA
export type DBPizzasT = {
  pizza: PizzaT[];
};
export type DBPizzasWithStatus = DBPizzasT & StatusT;

// INFO
export type DBInfoT = {
  cart: PizzaT[];
  doughTypes: string[];
  categories: CategoriesT[];
  sortNamePizzaKeys: string[];
};
export type DBInfoWithStatus = DBInfoT & StatusT;

//
export type DBCartT = {
  cart: PizzaT[];
};
export type DBCartWithStatusT = DBCartT & StatusT;

export type SortKeysT = Pick<PizzaT, 'rating' | 'price' | 'title'>;
