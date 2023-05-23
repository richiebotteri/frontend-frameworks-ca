import { useEffect, useState } from "react";

/**
 * useApi is a hook with three features:
 * 1. It can fetch and return data by adding an API url
 * 2. It can tell you if data is loading or not
 * 3. it can tell you if an error has happened or not.
 * @param {string} url
 * @returns data, loading state and error
 */
export default function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);

  return { data, isLoading, isError };
}
