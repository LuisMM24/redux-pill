import { Dispatch } from "redux";
import { fetchProperties } from "../services/fetchProperties";
import { setQueryParam } from "../services/setQueryParam";
import { FILTERED_SEARCH, FIRST_SEARCH } from "./types";

export const setFirstSearch = (value: string) => {
  return async (dispatch: Dispatch) => {
    const properties = await fetchProperties(`city=${value}`);

    return dispatch({
      type: FIRST_SEARCH,
      payload: {
        properties: properties,
        inputSearch: value,
      },
    });
  };
};

export const setSearchWithFilter = (formValues: IFormFilter, city: string) => {
  return async (dispatch: Dispatch) => {
    const query = setQueryParam(formValues, city);
    const properties = await fetchProperties(query);
    return dispatch({
      type: FILTERED_SEARCH,
      payload: properties,
    });
  };
};
