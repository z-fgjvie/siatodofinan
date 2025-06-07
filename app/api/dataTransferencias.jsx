import { useEffect, useState } from "react";

export const dataTransferencias = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/transacciones/listar`;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url, {
          credentials: "include",
        });
        const json = await response.json();

        setResult(json.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url]);

  return { result, loading };
};
