import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Location, Button } from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Natal</strong>
          <span>Rio Grande do Norte</span>
        </Location>

        <Link to="/app">
          <Button>
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
          </Button>
        </Link>
      </Content>
    </Container>
  );
}
