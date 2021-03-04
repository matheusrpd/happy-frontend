import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/map-marker.svg';

import { Container, Content, Form, ButtonBack } from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Happy"/>

        <h1>happy</h1>

        <div>
          <strong>Natal</strong>
          <span>Rio Grande do Norte</span>
        </div>
      </Content>

      <Form>
        <ButtonBack to="/">
          <FiArrowLeft size={24} color="#15C3D6"/>
        </ButtonBack>

        <main>
          <h2>Fazer login</h2>

          <div>
            <label htmlFor="email">Email</label>
            <input name="email" type="text" placeholder="Email" />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input name="password" type="text" placeholder="Senha" />
          </div>

          <button type="submit">Entrar</button>
        </main>
      </Form>
    </Container>
  );
}
