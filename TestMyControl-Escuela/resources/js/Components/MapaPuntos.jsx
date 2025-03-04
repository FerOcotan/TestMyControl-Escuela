import React, { useState } from "react";
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

const MapaPuntos = ({ alumnos = [], escuelas = [] }) => {
    const puntos = [
        ...alumnos.map((alumno) => ({
            id: alumno.id_alumno,
            nombre: alumno.nombre_completo,
            latitud: parseFloat(alumno.latitud),
            longitud: parseFloat(alumno.longitud),
            tipo: "Alumno",
            foto: alumno.foto,
        })),
        ...escuelas.map((escuela) => ({
            id: escuela.id_school,
            nombre: escuela.nombre,
            latitud: parseFloat(escuela.latitud),
            longitud: parseFloat(escuela.longitud),
            tipo: "Escuela",
            foto: escuela.foto,
        })),
    ];

    const [activeMarker, setActiveMarker] = useState(null);

    const containerStyle = {
        width: "100%",
        height: "550px",
        marginBottom: "20px",
    };

    const defaultCenter = { lat: 13.69294, lng: -89.21819 };

    const iconos = {
        Alumno: {
            url: "https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
        },
        Escuela: {
            url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
        },
    };

    const handleMarkerClick = (punto) => setActiveMarker(punto);
    const handleCloseInfoWindow = () => setActiveMarker(null);

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={10}
            >
                {puntos.map((punto) => (
                    <Marker
                        key={`${punto.tipo}-${punto.id}`}
                        position={{ lat: punto.latitud, lng: punto.longitud }}
                        icon={iconos[punto.tipo]}
                        onClick={() => handleMarkerClick(punto)}
                    />
                ))}

                {activeMarker && (
                    <InfoWindow
                        position={{
                            lat: activeMarker.latitud,
                            lng: activeMarker.longitud,
                        }}
                        onCloseClick={handleCloseInfoWindow}
                    >
                        <div style={{ textAlign: "center", maxWidth: "200px" }}>
                            <h3
                                style={{
                                    margin: "5px 0",
                                    color:
                                        activeMarker.tipo === "Escuela"
                                            ? "green"
                                            : "orange",
                                }}
                            >
                                {activeMarker.tipo}
                            </h3>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {activeMarker.foto ? (
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${activeMarker.foto}`}
                                        alt={activeMarker.nombre}
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "10px",
                                            objectFit: "cover",
                                            marginBottom: "10px",
                                        }}
                                        onError={(e) => {
                                            e.target.src =
                                                "https://placehold.co/100x100";
                                        }}
                                    />
                                ) : (
                                    <div
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "10px",
                                            backgroundColor: "#ccc",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: "#fff",
                                                fontSize: "14px",
                                            }}
                                        >
                                            N/A
                                        </span>
                                    </div>
                                )}
                            </div>

                            <p>
                                <strong>Nombre:</strong> {activeMarker.nombre}
                            </p>
                            <p>
                                <strong>Dirección:</strong>{" "}
                                {activeMarker.latitud}, {activeMarker.longitud}
                            </p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapaPuntos;
