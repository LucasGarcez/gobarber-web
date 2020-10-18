import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logo from 'src/assets/logo.svg';
import { Input, Button } from 'src/components';

import { Container, Content, Background } from './SingInStyles';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <form>
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} name="email" placeholder="Seu email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Sua senha"
          />

          <Button type="submit">Entrar</Button>

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
