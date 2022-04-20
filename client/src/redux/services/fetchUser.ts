type Query = "login" | "register";

export const fetchUser = (
  query: Query,
  formValues: IUserForm
): Promise<IUser> => {
  const user = fetch(`http://localhost:8100/api/${query}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formValues),
  })
    .then((res) => res.json())
    .then((data) => data.data);
  return user;
};
