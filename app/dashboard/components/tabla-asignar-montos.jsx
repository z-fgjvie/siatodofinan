"use client";
import { getUsuarios } from "@/app/api/getUsuarios";
import React, { useState } from "react";

export default function TablaAsignarMonto() {
  // Traemos todos los usuarios del backend
  const { result, loading } = getUsuarios();

  // Estado para guardar los montos que se escriben en los inputs
  // Se guarda como un objeto: { idUsuario1: monto, idUsuario2: monto }
  const [montos, setMontos] = useState({});
  console.log(result);

  // Mostrar mensaje mientras se cargan los usuarios
  if (loading) return <p className="text-center">Cargando usuarios...</p>;

  // Esta función se ejecuta cuando das clic en "Asignar"
  const handleAsignar = async (id) => {
    const monto = montos[id]; // Obtenemos el monto que escribiste para ese usuario por su ID

    // Validación básica: si no hay monto, muestra alerta
    if (!monto) return alert("Ingresa un monto válido");

    try {
      const token = localStorage.getItem("token"); // Traemos el token del localStorage

      // Llamamos al endpoint del backend para asignar el monto
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_LOCAL}/api/garantias/asignar-monto/${id}`,
        {
          method: "PATCH", // 👈 IMPORTANTE: debe ser PATCH, no PUT o como este en el Backend
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ montoGarantia: parseFloat(monto) }), // Convertimos y enviamos el monto como número decimal
        }
      );

      if (res.ok) {
        alert("Monto asignado correctamente");
      } else {
        alert("Error al asignar monto");
      }
    } catch (error) {
      console.log(error);
      alert("Error en la solicitud");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Asignar Garantías
      </h2>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Tipo Cliente</th>
            <th className="border p-2">Telefono</th>
            <th className="border p-2">Saldo de Prestamo</th>
            <th className="border p-2">Monto Actual</th>
            <th className="border p-2">Nuevo Monto</th>
            <th className="border p-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {result.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border p-2">
                {user.nombreCompleto || user.nombreEmpresa}
              </td>
              <td className="border p-2">{user.tipoCliente}</td>
              <td className="border p-2">{user.telefono}</td>
              <td className="border p-2">
                {user.montoGarantia ?? "No asignado"}
              </td>
              <td className="border p-2">
                {user.saldoPrestamo ?? "No asignado"}
              </td>
              <td className="border p-2">
                <input
                  type="number"
                  className="border px-2 py-1 rounded w-28"
                  value={montos[user.id] || ""} // Buscamos en el estado 'montos' el valor que corresponde a este usuario por su id
                  // Si no hay nada aún (es undefined), usamos "" para que se muestre vacío
                  onChange={(e) =>
                    setMontos({
                      ...montos, // Copiamos el estado actual (todos los montos escritos hasta ahora
                      [user.id]: e.target.value,
                      // Actualizamos el monto para el usuario actual usando su id como clave
                      // e.target.value es lo que el usuario está escribiendo en ese momento
                      // Así logramos que cada usuario tenga su propio valor asociado en el estado
                    })
                  }
                />
              </td>
              <td className="border p-2">
                <button
                  onClick={() => handleAsignar(user.id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Asignar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
