import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapaPuntos = ({ alumnos = [], escuelas = [] }) => {
    // Combina los datos de alumnos y escuelas en un solo array
    const puntos = [
        ...alumnos.map(alumno => ({
            id: alumno.id_alumno,
            nombre: alumno.nombre,
            latitud: parseFloat(alumno.latitud),
            longitud: parseFloat(alumno.longitud),
            tipo: 'alumno', // Para diferenciar entre alumnos y escuelas
            foto: alumno.foto, // Asume que tienes un campo 'foto' en el modelo Alumno
        })),
        ...escuelas.map(escuela => ({
            id: escuela.id_school,
            nombre: escuela.nombre,
            latitud: parseFloat(escuela.latitud),
            longitud: parseFloat(escuela.longitud),
            tipo: 'escuela', // Para diferenciar entre alumnos y escuelas
            foto: escuela.foto, // Asume que tienes un campo 'foto' en el modelo Escuela
        })),
    ];

    // Estado para controlar qué marcador está activo (mostrando info)
    const [activeMarker, setActiveMarker] = useState(null);

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

    // Íconos personalizados
    const iconos = {
        alumno: {
            url: 'https://maps.google.com/mapfiles/ms/icons/purple-dot.png',
        },
        escuela: {
            url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png', // Ícono verde
        },
    };

    // Maneja el clic en un marcador
    const handleMarkerClick = (punto) => {
        setActiveMarker(punto);
    };

    // Cierra la ventana de información
    const handleCloseInfoWindow = () => {
        setActiveMarker(null);
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
                        icon={iconos[punto.tipo]} // Usa el ícono correspondiente
                        onClick={() => handleMarkerClick(punto)} // Maneja el clic en el marcador
                    />
                ))}

                {/* Muestra la ventana de información si hay un marcador activo */}
                {activeMarker && (
                    <InfoWindow
                        position={{ lat: activeMarker.latitud, lng: activeMarker.longitud }}
                        onCloseClick={handleCloseInfoWindow} // Cierra la ventana al hacer clic en la "X"
                    >
                        <div style={{ textAlign: 'center' }}>
                            <h3>{activeMarker.nombre}</h3>

                            
                            {activeMarker.foto ? (
                                <img
                                src={`http://127.0.0.1:8000/storage/${activeMarker.foto}`}


                                    alt={activeMarker.nombre}
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginBottom: '10px',
                                    }}
                                    onError={(e) => {
                                        e.target.src = 'https://placehold.co/100x100'; // Imagen de respaldo si la foto no se carga
                                    }}
                                />
                            ) : (
                                <div
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        backgroundColor: '#ccc',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <span style={{ color: '#fff', fontSize: '14px' }}>N/A</span>
                                </div>
                            )}


                            <p>
                                <strong>Tipo:</strong> {activeMarker.tipo}
                            </p>
                            <p>
                                <strong>Latitud:</strong> {activeMarker.latitud}
                            </p>
                            <p>
                                <strong>Longitud:</strong> {activeMarker.longitud}
                            </p>
                        </div>
                    </InfoWindow>
                )}
                console.log('Alumnos:', alumnos); // Verifica que los datos de alumnos lleguen
                console.log('Escuelas:', escuelas); // Verifica que los datos de escuelas lleguen
            </GoogleMap>
        </LoadScript>
    );
};

export default MapaPuntos;