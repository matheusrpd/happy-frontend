import styled from 'styled-components';
import imgBackground from '../../assets/landing.svg';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 1120px;

  height: 100%;
  max-height: 680px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  background: url(${imgBackground}) no-repeat 80% center;

  header {
    display: flex;
  }

  main {
    max-width: 350px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  main h1 {
    font-size: 76px;
    font-weight: 800;
    line-height: 70px;
  }

  main p {
    font-size: 24px;
    line-height: 34px;
    margin-top: 40px;
  }
`;

export const Location = styled.div`
  font-size: 24px;
  line-height: 34px;
  text-align: left;
  margin-left: 48px;

  display: flex;
  flex-direction: column;

  strong {
    font-weight: 800;
    font-size: 20px;
  }

  span {
    font-size: 20px;
  }
`;

export const Button = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: #96feff;
  }
`;

export const ButtonLogin = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 222px;
  height: 56px;
  background: #12D4E0;

  border: 0;
  border-radius: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  transition: color 0.2s;
  transition: background-color 0.2s;

  &:hover {
    background: #96FEFF;
    color: #15C3D6;
  }
`;