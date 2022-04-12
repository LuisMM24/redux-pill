import { combineReducers } from "redux";
import { reducer as propertiesReducer } from "./properties/reducer";
import { reducer as isLoadingReducer } from "./isLoading/reducer";
const reducers = combineReducers({
  searcher: propertiesReducer,
  isLoading: isLoadingReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
