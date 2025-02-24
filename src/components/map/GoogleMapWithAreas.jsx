'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet"

function MyMap() {

    const locations = [
        { name: "Kanyakumari", position: [8.0883, 77.5385] },
        { name: "Mumbai", position: [19.076, 72.8777] },
        { name: "Delhi", position: [28.6139, 77.209] },
        { name: "Kolkata", position: [22.5726, 88.3639] },
        { name: "Chennai", position: [13.0827, 80.2707] },
    ]

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
    })

    return (
        <MapContainer center={[8.0883, 77.5385]} zoom={4} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
                <Marker key={index} position={location.position} icon={customIcon}>
                    <Popup>{location.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MyMap;
