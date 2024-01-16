import { useState, useEffect } from 'react';

import { getData } from '../helpers/fetchData';

const useDataApi = <T,>(
  initialUrl: string,
  initialData: T,
): { data: T; isLoading: boolean; isError: string } => {
  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    setIsError('');
    getData<T>(initialUrl)
      .then((d) => {
        setData(d);
      })
      .catch((err) => {
        setIsError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, isError };
};

export default useDataApi;
