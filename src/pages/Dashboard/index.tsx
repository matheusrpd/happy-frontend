import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Marker, Popup } from 'react-leaflet';
import api from '../../services/api';
import PermissionComponent from "../../components/PermissionComponent";

import mapIcon from '../../utils/MapIconApp';
import mapMarkerImg from '../../assets/map-marker.svg';
import Map from '../../components/Map';

import { Container, Button } from './styles';

export interface IOrphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);

  useEffect(() => {
    const loadOrphanages = async () => {
      const response = await api.get('/orphanages');
      setOrphanages(response.data);
    }
    loadOrphanages();
  }, []);

  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </header>

        <footer>
          <strong>Natal</strong>
          <span>Rio Grande do Norte</span>
        </footer>
      </aside>

      <Map style={{ width: '100%', height: '100%'}}>
        {orphanages.map(orphanage => (
          <Marker icon={mapIcon} position={[orphanage.latitude,orphanage.longitude]} key={orphanage.id}>
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            { orphanage.name.length > 15 
              ? `${orphanage.name.substring(0, 15)}...`
              : `${orphanage.name}`
            }
            <Link to={`orphanages/${orphanage.id}`}>
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
        ))}
      </Map>
        
        <PermissionComponent role="ROLE_ADMIN,ROLE_EMPLOYEE">
          <Button to="/orphanages/create">
            <FiPlus size={32} color="#fff" />
          </Button>
        </PermissionComponent>
    </Container>
  );
}
