import { Action, configureStore, createImmutableStateInvariantMiddleware, ThunkAction } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistedReducer = persistReducer(
  {
    key: "vlad-boiler",
    storage,
    blacklist: ["snackbar"],
  },
  rootReducer,
);

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
  ignoredPaths: [],
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([immutableInvariantMiddleware]),
  devTools: true,
});

export const persistor = persistStore(store);

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./reducers/rootReducer", () => store.replaceReducer(persistedReducer));
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
