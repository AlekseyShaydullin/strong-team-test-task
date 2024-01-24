import { combineSlices, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tasksReducer from './reducers/tasksSlice';

// собираем редьюсеры в основной рутовый:
const rootReducer = combineSlices({
  tasks: tasksReducer,
});

// конфиг persist:
const persistConfig = {
  key: 'root',
  storage,
};

// подключаем persist:
const persistedReducer = persistReducer(persistConfig, rootReducer);

// собираем стор:
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
