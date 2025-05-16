import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, MarkerF, InfoWindowF, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
    width: "100%",
    height: "500px",
};

const center = {
    lat: 47.5163008,
    lng: 8.6445932,
};

const grayStyles = [
    { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#686868" }] },
    { featureType: "landscape", elementType: "all", stylers: [{ color: "#f2f2f2" }] },
    { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
    { featureType: "road", elementType: "all", stylers: [{ saturation: -100 }, { lightness: 45 }] },
    { featureType: "water", elementType: "all", stylers: [{ color: "#b7e4f4" }, { visibility: "on" }] }
];

const MapComponent = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyA0dT_ztojEL06D4NjVJpnz1E-a-pA4a-s", // Replace with your API key
        libraries: ["places"],
    });

    const [activeMarker, setActiveMarker] = useState(null); // Track the active marker
    const [icon, setIcon] = useState(null);

    const locations = [
        {
            name: "MedZentrum Pfungen",
            lat: 47.5163008,
            lng: 8.6445932,
            address: "Riedäckerstrasse 5, CH-8422 Pfungen",
            email: "apotheke@medzentrum.ch",
        }
    ];

    // Load the custom icon once the Google Maps API is loaded
    useEffect(() => {
        if (isLoaded && window.google) {
            setIcon({
                url: "https://backend.medzentrum.ch/uploads/Group_1597880067_7fea8e3a67.svg",
                scaledSize: new window.google.maps.Size(80, 110),
            });
        }
    }, [isLoaded]);

    //   useEffect(() => {
    //     let btn = document.getElementsByClassName('gm-style-iw.gm-style-iw-c');
    //     if(btn){
    //         btn[1].style.display = 'none';
    //     }
    //   }, [])

    useEffect(() => {
        const hideElement = () => {
            const element = document.querySelector('[aria-labelledby="E4E5F0F4-068C-44B0-B3E5-6004C4C2BF26"]');
            if (element) {
                element.style.display = "none";
            }
        };

        const interval = setInterval(hideElement, 500); // Check every 500ms

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


    const onMapLoad = useCallback((map) => {
        console.log("Map Loaded:", map);
    }, []);

    if (loadError) return <p>Error loading maps</p>;
    if (!isLoaded) return <p>Loading maps...</p>;

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={17}
            center={center}
            options={{ styles: grayStyles, disableDefaultUI: true }}
            onLoad={onMapLoad}
        >
            {locations.map((location, index) => (
                <MarkerF
                    key={index}
                    position={{ lat: location.lat, lng: location.lng }}
                    icon={icon} // Use the custom icon
                    onClick={() => setActiveMarker(index)} // Set the active marker on click
                >
                    {/* Render InfoWindow only for the active marker */}
                    {activeMarker === index && (
                        <InfoWindowF
                            position={{ lat: location.lat, lng: location.lng }}
                            onCloseClick={() => setActiveMarker(null)} // Close InfoWindow
                        >
                            <div>
                                <p><strong>{location.name}</strong></p>
                                <p>{location.address}</p>
                                <p><a href={`mailto:${location.email}`}>{location.email}</a></p>
                            </div>
                        </InfoWindowF>
                    )}
                </MarkerF>
            ))}
        </GoogleMap>
    );
};

export default MapComponent;