import {
  configureStore,
  // combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import phonebookReducer from "./reducer";
import { contactApi } from "./slice";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware,
  logger,
];

// const persistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, phonebookReducer),
// });

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

setupListeners(store.dispatch);
// export const persistor = persistStore(store);
