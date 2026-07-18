// src/hooks/useDataLoader.js
import { useState, useEffect } from "react";

export function useDataLoader(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    let ignore = false;

    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        await sleep(2000);

        const response = await fetch(url);

        // throw new Error("Simulated network failure");

        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        const json = await response.json();
        if (!ignore) {
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
          setLoading(false);
        }
      }
    };
    loadData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}
