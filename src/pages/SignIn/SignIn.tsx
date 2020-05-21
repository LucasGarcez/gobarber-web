import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from 'src/assets/logo.svg';
import { Container, Content, Background } from './SingInStyles';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Seu email" />
          <input type="password" placeholder="Sua senha" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="/">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};
