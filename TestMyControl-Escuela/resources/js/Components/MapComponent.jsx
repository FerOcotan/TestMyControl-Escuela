import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { usePage } from "@inertiajs/react";


// Componente para mostrar ell mapa con marcadores para cruds

const MapComponent = ({ latitud, longitud, setData }) => {
    // Accede a la clave de API de Google Maps desde la página actual
    const { props } = usePage();
    const googleMapsApiKey = props.googleMapsApiKey;

    const containerStyle = {
        width: "100%",
        height: "400px",
        marginBottom: "20px",
    };

    const defaultCenter = {
        lat: 13.69294,
        lng: -89.21819,
    };

    const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        setData("latitud", lat.toString());
        setData("longitud", lng.toString());
    };

    return (
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={
                    latitud && longitud
                        ? {
                              lat: parseFloat(latitud),
                              lng: parseFloat(longitud),
                          }
                        : defaultCenter
                }
                zoom={12}
                onClick={handleMapClick}
            >
                {latitud && longitud && (
                    <Marker
                        position={{
                            lat: parseFloat(latitud),
                            lng: parseFloat(longitud),
                        }}
                    />
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
