import { useState, useEffect } from "react";
import type { HospitalData } from "./types.ts";

const fetchExampleData = async (): Promise<HospitalData[]> => {
  try {
    const response = await fetch("https://bzk5nkrf-8080.uks1.devtunnels.ms/api");
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data: HospitalData[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error en fetchExampleData:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};

export const useApi = () => {
  const [exampleData, setExampleData] = useState<HospitalData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarDispositivos = async () => {
      setLoading(true);
      try {
        const data = await fetchExampleData();
        setExampleData(data); // ⬅️ Actualiza el estado y React re-renderiza
      } catch (error) {
        setError("Error al obtener los dispositivos");
      } finally {
        setLoading(false);
      }
    };

    cargarDispositivos();
  }, []);

  return { exampleData, loading, error };
};


