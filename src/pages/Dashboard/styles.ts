import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 440px;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 40px;
      line-height: 42px;
      font-weight: 800;
      margin-top: 64px;
    }

    p {
      line-height: 28px;
      margin-top: 24px;
    }

    footer {
      display: flex;
      flex-direction: column;

      line-height: 24px;

      strong {
        font-weight: 800;
      }
    }
  }

  .leaflet-container {
    z-index: 5;
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 20px;
  }

  .map-popup .leaflet-popup-content {
    color: #0089A5;
    font-size: 20px;
    font-weight: 700;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      width: 40px;
      height: 40px;
      background: #15C3D6;
      box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
      border-radius: 12px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .map-popup .leaflet-popup-tip-container {
    top: 50%;
    left: 0;
  }

  .map-popup .leaflet-popup-tip {
    display: none;
  }
`;

export const Button = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 10;

  height: 64px;
  width: 64px;
  border-radius: 20px;
  background: #15c3d6;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background: #17d6eb;
  }
`;