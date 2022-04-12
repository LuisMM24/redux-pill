export const fetchProperties = (query: string): Promise<IPropertie[]> => {
  const promise = new Promise(
    (resolve: (data: Promise<any>) => void, reject) => {
      setTimeout(async () => {
        const data = fetch(`http://localhost:3001/properties?${query}`).then(
          (res) => res.json()
        );
        resolve(data);
      }, 500);
    }
  );
  return promise;
};
