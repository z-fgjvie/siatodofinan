export const getUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/user`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("Token inválido o expirado");
      return null;
    }

    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error("Error al obtener usuario:", err);
    return null;
  }
};
