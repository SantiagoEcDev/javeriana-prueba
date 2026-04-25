import { useEffect, useState } from "react";

export const useFetch = <T>(url: string, fallbackData?: T) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("Error al realizar la petición");

        const data = await response.json();

        setData(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          if (error.name === "AbortError") return;

          if (fallbackData !== undefined) {
            setData(fallbackData);
            setError(null);
          } else {
            setError(error.message);
          }
        } else {
          if (fallbackData !== undefined) {
            setData(fallbackData);
            setError(null);
          } else {
            setError("Error desconocido");
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};
