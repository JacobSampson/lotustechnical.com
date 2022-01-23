import { combineReducers } from "redux";
import viewReducer from "./viewReducer";

export const rootReducer = combineReducers({
  view: viewReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
