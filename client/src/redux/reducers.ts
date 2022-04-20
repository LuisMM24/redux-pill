import { combineReducers } from "redux";
import { reducer as propertiesReducer } from "./properties/reducer";
import { reducer as isLoadingReducer } from "./isLoading/reducer";
import { reducer as userReducer } from "./user/reducer";
const reducers = combineReducers({
  searcher: propertiesReducer,
  isLoading: isLoadingReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
