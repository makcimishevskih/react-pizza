import { useState, useEffect } from 'react';

import { getData } from '../helpers/fetchData';

const useDataApi = <T,>(initialUrl: string, initialData: T): { data: T } => {
  const [data, setData] = useState<T>(initialData);

  useEffect(() => {
    getData<T>(initialUrl).then((d) => setData(d));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data };
};

export default useDataApi;
