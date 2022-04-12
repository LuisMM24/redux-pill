interface ILoading {
  type: string;
  payload: boolean;
}

const initialValue: boolean = true;

export const reducer = (state: boolean = initialValue, action: ILoading) => {
  switch (action.type) {
    case "SET_LOADING":
      return action.payload;
    default:
      return state;
  }
};

export const setIsLoading = (value: boolean) => {
  return {
    type: "SET_LOADING",
    payload: value,
  };
};
