import { Action } from "redux";
import * as types from "./types";

const initialState: PropertieState = {
  inputSearch: "",
  properties: [],
};
export const reducer = (
  state: PropertieState = initialState,
  action: ActionProperties
) => {
  switch (action.type) {
    case types.FIRST_SEARCH:
      const { properties, inputSearch } = action.payload;
      return { inputSearch: inputSearch, properties: properties };
    case types.FILTERED_SEARCH:
      return { ...state, properties: action.payload };
    default:
      return state;
  }
};
