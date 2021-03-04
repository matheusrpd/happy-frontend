import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  width: calc(100% - 540px);
  height: 100%;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 129px;
    width: 109px;
  }

  h1 {
    font-size: 76px;
    font-weight: 800;
    line-height: 70px;
    margin-top: 24px;
  }
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;  
    margin-top: 100px;
  }
`;

export const Form = styled.div`
  position: relative;
  background: #fff;
  height: 100%;
  width: 540px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #5C8599;
    margin-bottom: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    label {
      font-weight: 600;
      color: #8FA7B2;
      margin-bottom: 4px;
    }

    input {
      width: 360px;
      height: 64px;
      background: #F5F8FA;
      border: 1px solid #D3E2E5;
      border-radius: 16px;
      padding: 0 16px;
      color: #5C8599;

      &:hover {
        border: 1px solid #A1E9C5;
      }

      ::-webkit-input-placeholder {
       color: #5C8599;

      }

      :-moz-placeholder { /* Firefox 18- */
        color: #5C8599;
  
      }

      ::-moz-placeholder {  /* Firefox 19+ */
        color: #5C8599;
  
      }

      :-ms-input-placeholder {  
        color: #5C8599;
      }
    }
  }

  button {
    width: 360px;
    height: 64px;
    opacity: 0.5;
    background: #37C77F;
    border: 0;
    border-radius: 16px;
    color: #fff;
    margin-top: 44px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const ButtonBack = styled(Link)`
  position: absolute;
  right: 48px;
  top: 48px;
  height: 48px;
  width: 48px;
  border: 0;
  border-radius: 16px;
  background: #EBF2F5;

  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
`;
