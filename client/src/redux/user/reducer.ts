import { LOGIN } from "./types";

const initialValue: IUser = {
  firstName: "",
  lastName: "",
  email: "",
  token: "",
};

export const reducer = (state: IUser = initialValue, action: ActionsUser) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
};
