import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/map-marker.svg';

import { Container, Content, Form, ButtonBack } from './styles';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      await signIn({
        email,
        password,
      });

      history.push('/app');
    },
    [email, password, signIn, history],
  );

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

      <Form onSubmit={handleSubmit}>
        <ButtonBack to="/">
          <FiArrowLeft size={24} color="#15C3D6"/>
        </ButtonBack>

        <main>
          <h2>Fazer login</h2>

          <div>
            <label htmlFor="email">Email</label>
            <input 
              name="email" 
              type="text" 
              placeholder="Email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input 
              name="password" 
              type="password" 
              placeholder="Senha" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Entrar</button>
        </main>
      </Form>
    </Container>
  );
}
