import { 
  MapContainer as LeafletMap, 
  MapContainerProps as LeafletMapProps, 
  TileLayer,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility';

interface MapProps extends LeafletMapProps {
  interactive?: boolean;
  children: React.ReactNode;
}

export default function Map({ children, interactive = true,...props }: MapProps) {
  return (
    <LeafletMap 
      center={[-5.82885890,-35.25656540]} 
      zoom={15} 
      dragging={interactive}
      touchZoom={interactive}
      zoomControl={interactive}
      scrollWheelZoom={interactive}
      doubleClickZoom={interactive}
      {...props}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
      {children}
    </LeafletMap>
  );
}