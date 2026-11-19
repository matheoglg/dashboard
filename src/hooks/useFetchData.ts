import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

const CITY_COORDS: Record<string, { latitude: number; longitude: number }> = {
    guayaquil: { latitude: -2.1962, longitude: -79.8862 },
    quito: { latitude: -0.2298, longitude: -78.525 },
    manta: { latitude: -0.9677, longitude: -80.7089 },
    cuenca: { latitude: -2.9005, longitude: -79.0045 },
};

interface FetchDataOutput {
    data: OpenMeteoResponse | null;
    loading: boolean;
    error: string | null;
}

export default function useFetchData(selectedOption: string | null): FetchDataOutput {

    const [data, setData] = useState<OpenMeteoResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Si la opción no existe en CITY_COORDS se usa Guayaquil por defecto
        const cityConfig = (selectedOption != null && CITY_COORDS[selectedOption]) || CITY_COORDS['guayaquil'];
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${cityConfig.latitude}&longitude=${cityConfig.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&hourly=temperature_2m,wind_speed_10m&timezone=America%2FGuayaquil&forecast_days=1`;

        const obtenerDatos = async () => {
            setLoading(true);
            setError(null);
            try {
                const respuesta = await fetch(url);
                if (!respuesta.ok) {
                    throw new Error(`Error ${respuesta.status}: no se pudieron obtener los datos del clima`);
                }
                const json: OpenMeteoResponse = await respuesta.json();
                setData(json);
            } catch (e) {
                setError(e instanceof Error ? e.message : 'Ocurrió un error inesperado');
            } finally {
                setLoading(false);
            }
        };

        obtenerDatos();
    }, [selectedOption]); // Se vuelve a ejecutar cada vez que cambia la ciudad

    return { data, loading, error };
}
