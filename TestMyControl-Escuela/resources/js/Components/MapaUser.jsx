import React from "react";
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
};

// Configuración inicial
const defaultCenter = { lat: 13.69294, lng: -89.21819 };

export default function MapaUser({ escuela }) {
    // Estado para controlar si el InfoWindow está abierto
    const [isOpen, setIsOpen] = React.useState(false);

    // Validar y convertir coordenadas
    const escuelaPosition =
        escuela?.latitud && escuela?.longitud
            ? {
                  lat: parseFloat(escuela.latitud),
                  lng: parseFloat(escuela.longitud),
              }
            : defaultCenter;

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={escuelaPosition}
                zoom={15}
            >
                {/* Marcador de la escuela */}
                {escuela?.latitud && escuela?.longitud && (
                    <Marker
                        position={escuelaPosition}
                        onClick={() => setIsOpen(true)} // Abre el InfoWindow al hacer clic
                    />
                )}

                {/* InfoWindow para mostrar detalles de la escuela */}
                {isOpen && (
                    <InfoWindow
                        position={escuelaPosition}
                        onCloseClick={() => setIsOpen(false)} // Cierra el InfoWindow
                    >
                        <div>
                            <h3 className="font-bold">{escuela.nombre}</h3>
                            <p>{escuela.direccion}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
}
