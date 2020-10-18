import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logo from 'src/assets/logo.svg';
import { Input, Button } from 'src/components';

import { Container, Content, Background } from './styles';

export const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="logo" />
        <form>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="Seu email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Sua senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="/">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
};
