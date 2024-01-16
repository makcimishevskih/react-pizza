import { configureStore } from '@reduxjs/toolkit';
import rootSlice from './slices/rootReducer';
import infoSlice from './slices/infoReducer';

const store = configureStore({
  reducer: {
    pizzas: rootSlice,
    info: infoSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
