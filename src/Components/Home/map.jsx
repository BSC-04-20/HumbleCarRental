import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { useState } from "react";

export default function HumbleCarRentalLocation() {
  const [marker] = useState({
    lat: -15.7861,   // Example: Blantyre coordinates
    lng: 35.0058,
  });

  return (
    <div className="w-full h-[400px] my-10 rounded-md overflow-hidden">
      <Map
        center={marker}
        zoom={14}
        mapId="" // Optional: Your custom Map ID if using styling
        className="w-full h-full"
      >
        <AdvancedMarker position={marker} />
      </Map>
    </div>
  );
}
