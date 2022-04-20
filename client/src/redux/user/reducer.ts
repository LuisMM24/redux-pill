import { LOGIN, LOGOUT } from "./types";

const initialValue: IUser = {
  firstName: "",
  lastName: "",
  email: "",
  token: null,
};

export const reducer = (state: IUser = initialValue, action: ActionsUser) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;

    case LOGOUT:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
