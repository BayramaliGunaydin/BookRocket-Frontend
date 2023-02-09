import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import BookReducer from "./BookReducer";
import UserReducer from "./UserReducer";

export const RootReducer = combineReducers({
  auth: AuthReducer,
  book: BookReducer,
  user: UserReducer,
});
