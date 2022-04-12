export const setQueryParam = (form: IFormFilter, city: string): string => {
  let query: string = "";
  // getting object keys and values
  const formKeys = Object.keys(form);
  const formValues = Object.values(form);

  formKeys.forEach((element, idx) => {
    if (formValues[idx]) {
      if (Array.isArray(formValues[idx])) {
        formValues[idx].forEach((val: string) => {
          query += `${element}=${val}&`;
        });
        return;
      }
      query += `${element}=${formValues[idx]}&`;
    }
  });
  query = query.substring(0, query.length - 1);
  return `city=${city}&${query}`;
};
