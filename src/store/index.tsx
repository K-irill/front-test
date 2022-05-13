import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReduser from "./reducers/postsSlice";

const rootReducer = combineReducers({
  postReduser,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
