import { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import PrimaryButton from '../../components/PrimaryButton';
import Sidebar from '../../components/Sidebar';
import MapCreate from '../../components/MapCreate';

import { 
  Container, 
  Input, 
  Images, 
  ButtonSelect 
} from './styles';

import api from '../../services/api';

export default function OrphanagesCreate() {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instructions, setInstructions] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [openOnWeekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const selectedImages = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append("name", name);
    data.append("about", about);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("instructions", instructions);
    data.append("opening_hours", openingHours);
    data.append("whatsapp", whatsapp);
    data.append("open_on_weekends", String(openOnWeekends));

    images.forEach((image) => {
      data.append("images", image);
    });

    await api.post("orphanages", data);

    history.push('/app');
  }

  return (
    <Container>
      <Sidebar />

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <MapCreate 
              style={{width: '100%', height: '280px' }} 
              handleSetPosition={setPosition}
            />

            <Input>
              <label htmlFor='name'>Nome</label>
              <input 
                id='name' 
                value={name} 
                onChange={(event) => setName(event.target.value)}
              />
            </Input>

            <Input>
              <label htmlFor='about'>Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea 
                id='name' 
                maxLength={300} 
                value={about}
                onChange={(event) => setAbout(event.target.value)}
              />
            </Input>

            <Input>
              <label htmlFor='whatsapp'>Número do Whatsapp</label>
              <input 
                type='text' 
                id='whatsapp' 
                maxLength={11} 
                minLength={11} 
                value={whatsapp}
                onChange={(event) => setWhatsapp(event.target.value)}
              />
            </Input>

            <Input>
              <label htmlFor='images'>Fotos</label>

              <Images>
                {previewImages.map(image => (
                  <img key={image} src={image} alt={name}/>
                ))}

                <label htmlFor="image[]">
                  <FiPlus size={24} color='#15b6d6' />
                </label>
              </Images>

              <input                 
                multiple
                type="file"
                id="image[]"
                onChange={selectedImages}
              />
            </Input>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <Input>
              <label htmlFor='instructions'>Instruções</label>
              <textarea 
                id='instructions'
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </Input>

            <Input>
              <label htmlFor='opening_hours'>Horário de funcionamento</label>
              <input 
                id='opening_hours' 
                value={openingHours}
                onChange={(event) => setOpeningHours(event.target.value)}
              />
            </Input>

            <Input>
              <label htmlFor='open_on_weekends'>Atende fim de semana</label>

              <ButtonSelect>
                <button 
                  type='button' 
                  className={openOnWeekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >    
                  Sim
                </button>
                <button 
                  type='button'                  
                  className={!openOnWeekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </ButtonSelect>
            </Input>
          </fieldset>

          <PrimaryButton type='submit'>Confirmar</PrimaryButton>
        </form>
      </main>
    </Container>
  );
}