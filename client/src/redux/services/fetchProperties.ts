export const fetchProperties = (
  query: string
): Promise<IPropertie[] | null> => {
  const data = fetch(`http://localhost:8100/api/properties?${query}`)
    .then((res) => res.json())
    .then((data) => {
      return data.data;
    })
    .catch((err: Error) => {
      return err.message;
    });
  return data;
};
