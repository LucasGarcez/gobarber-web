import React from 'react';

import { SignIn } from 'src/pages/SignIn/SignIn';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyle />
    </>
  );
};

export default App;
