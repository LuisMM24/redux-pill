import { Dispatch } from "redux";

import { LOGIN, LOGOUT } from "./types";

import { fetchUser } from "../services/fetchUser";

export const signIn = (formValues: IUserForm, isRegistering: boolean) => {
  const query = isRegistering ? "register" : "login";
  return async (dispatch: Dispatch) => {
    const user = await fetchUser(query, formValues);
    dispatch({
      type: LOGIN,
      payload: user,
    });
  };
};

export const signOut = () => {
  return {
    type: LOGOUT,
    payload: null,
  };
};
