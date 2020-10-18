import React from 'react';

import { SignIn } from 'src/pages/SignIn/SignIn';
import { SignUp } from 'src/pages/SignUp/SignUp';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyle />
    </>
  );
};

export default App;
