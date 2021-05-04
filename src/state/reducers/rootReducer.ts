import { combineReducers } from "redux";
import snackbar from "./snackbar";
const rootReducer = combineReducers({ snackbar });
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
