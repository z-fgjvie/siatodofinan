// app/aprobar/page.jsx
"use client";
import { dataPendientes } from "@/app/api/dataPendientes";
import React, { useEffect, useState } from "react";

export default function PageAprobar() {
  const [pendientes, setPendientes] = useState([]);
  const { result, loading } = dataPendientes();

  useEffect(() => {
    if (result) {
      setPendientes(result);
    }
  }, [result]);

  if (loading) return <p className="text-center">Cargando...</p>;

  const aprobarGarantia = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/garantias/aprobar/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setPendientes((prev) => prev.filter((item) => item.id !== id));
        console.log("✅ Aprobado:", data);
      } else {
        console.error("❌ Error al aprobar:", data.message);
      }
    } catch (error) {
      console.error("Error del cliente:", error);
    }
  };

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold text-center my-5">
        Aprobar Solicitudes
      </h2>
      {pendientes.length === 0 ? (
        <p className="text-center">No hay solicitudes pendientes.</p>
      ) : (
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Usuario ID</th>
              <th className="p-2 border">Estado</th>
              <th className="p-2 border">Acción</th>
            </tr>
          </thead>
          <tbody>
            {pendientes.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border text-center">{item.id}</td>
                <td className="p-2 border text-center">{item.usuarioId}</td>
                <td className="p-2 border text-center">{item.estado}</td>
                <td className="p-2 border text-center">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={() => aprobarGarantia(item.id)}
                  >
                    Aprobar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
