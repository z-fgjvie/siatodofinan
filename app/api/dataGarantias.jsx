import { useEffect, useState } from "react";

export const dataGarantias = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/garantias/listar`;

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // <-- aquí el token
          },
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
