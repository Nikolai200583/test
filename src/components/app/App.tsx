/* eslint-disable react/jsx-pascal-case */

import Header from '../header/Header';
import Footer from '../footer/footer';
import Main from '../main/main';

import { GlobalStyle } from '../../globaleStyles';

import * as Styled from './styles';

const App = () => {
  return (
    <Styled.app>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </Styled.app>
  );
};

export default App;
