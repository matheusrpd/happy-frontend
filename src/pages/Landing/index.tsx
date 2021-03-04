import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Location, Button, ButtonLogin } from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <header>
          <img src={logoImg} alt="Happy"/>

          <Location>
            <strong>Natal</strong>
            <span>Rio Grande do Norte</span>
          </Location>  
        </header>

        <Link to="/login">
          <ButtonLogin>
            Acesso restrito
          </ButtonLogin>
        </Link>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Link to="/app">
          <Button>
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
          </Button>
        </Link>
      </Content>
    </Container>
  );
}
