/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetch = (urlApi) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(urlApi)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setData(data))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    }, 1500);
  }, []);
  return { isLoading, error, data };
};
