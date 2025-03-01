import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapaPuntos = ({ alumnos = [], escuelas = [] }) => {
    // Combina los datos de alumnos y escuelas en un solo array
    const puntos = [
        ...alumnos.map(alumno => ({
            id: alumno.id,
            nombre: alumno.nombre,
            latitud: parseFloat(alumno.latitud),
            longitud: parseFloat(alumno.longitud),
            tipo: 'alumno', // Para diferenciar entre alumnos y escuelas
        })),
        ...escuelas.map(escuela => ({
            id: escuela.id,
            nombre: escuela.nombre,
            latitud: parseFloat(escuela.latitud),
            longitud: parseFloat(escuela.longitud),
            tipo: 'escuela', // Para diferenciar entre alumnos y escuelas
        })),
    ];

    // Configuración del mapa
    const containerStyle = {
        width: '100%',
        height: '400px',
        marginBottom: '20px',
    };

    // Centro del mapa (puedes calcularlo dinámicamente o usar un valor fijo)
    const defaultCenter = {
        lat: 13.69294,
        lng: -89.21819,
    };

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={10}
            >
                {/* Muestra los puntos en el mapa */}
                {puntos.map((punto) => (
                    <Marker
                        key={`${punto.tipo}-${punto.id}`}
                        position={{ lat: punto.latitud, lng: punto.longitud }}
                        label={punto.tipo === 'alumno' ? 'A' : 'E'} // Etiqueta para diferenciar
                        title={punto.nombre} // Muestra el nombre al hacer hover
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapaPuntos;