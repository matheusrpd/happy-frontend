import { useState, useEffect } from 'react';
import { Marker } from 'react-leaflet';
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';

import PrimaryButton from "../../components/PrimaryButton";
import Sidebar from "../../components/Sidebar";
import mapIcon from '../../utils/MapIconApp';
import Map from "../../components/Map";

import { 
  Container, 
  Details, 
  Images, 
  Content, 
  MapContainer, 
  Cards } 
from './styles';

interface IOrphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  whatsapp: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface IParams {
  id: string;
}

export default function Orphanage() {
  const { id } = useParams<IParams>();

  const [orphanage, setOrphanage] = useState<IOrphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);  

  useEffect(() => {
    api.get(`/orphanages/${id}`).then(response => {
      setOrphanage(response.data);
    });
  }, [id]);

  if(!orphanage) {
    return <p>Carregando...</p>
  }
  
  return (
    <Container>
      <Sidebar />

      <main>
        <Details>
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

          <Images>
            {orphanage.images.map((image, index) => (
              <button 
                key={image.id}
                className={activeImageIndex === index ? "active" : ""}
                type="button"
                onClick={() => {
                  setActiveImageIndex(index);
                }}
              >
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </Images>
          
          <Content>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map 
                interactive={false}
                center={[orphanage.latitude,orphanage.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
              >
                <Marker icon={mapIcon} position={[orphanage.latitude,orphanage.longitude]} />
              </Map>

              <footer>
                <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>

              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <Cards>
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF6690" />
                  Não Atendemos <br />
                  fim de semana
                </div>
              )}
            </Cards>

            <a 
              href={`https://api.whatsapp.com/send?phone=55${orphanage.whatsapp}`} 
              target="_blank"
              rel="noreferrer"
            >
              <PrimaryButton type="button" >
                <FaWhatsapp size={20} color="#FFF" />
                Entrar em contato
              </PrimaryButton>
            </a>
          </Content>
        </Details>
      </main>
    </Container>
  );
}
