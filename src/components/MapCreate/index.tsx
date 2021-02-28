import { useState } from 'react';
import { 
  MapContainer as LeafletMap, 
  MapContainerProps as LeafletMapProps, 
  Marker as MarkerLeaflet,
  TileLayer,
  useMapEvent
} from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility';

import MapIcon from '../../utils/MapIconCreate';

interface SetPositionDTO {
  latitude: number;
  longitude: number;
}

interface MarkerProps {
  handleSetPosition?: ({ latitude, longitude }: SetPositionDTO) => void;
}

const Marker: React.FC<MarkerProps> = ({ handleSetPosition }: MarkerProps): JSX.Element => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const map = useMapEvent('click', (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;

    handleSetPosition!({
      latitude: lat,
      longitude: lng
    });

    setPosition({
      latitude: lat,
      longitude: lng
    });
  })
  
  return (
    <MarkerLeaflet
      interactive={false} 
      icon={MapIcon} 
      position={[position.latitude,position.longitude]}
    />
  );
}

interface MapProps extends LeafletMapProps {
  interactive?: boolean;
  handleSetPosition?: ({ latitude, longitude }: SetPositionDTO) => void;
}

export default function Map({ interactive = true, handleSetPosition, ...props }: MapProps) {
  return (
    <LeafletMap 
      center={[-5.82885890,-35.25656540]} 
      zoom={15} 
      {...props}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
      <Marker handleSetPosition={handleSetPosition} />
    </LeafletMap>
  );
}