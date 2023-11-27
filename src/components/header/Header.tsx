/* eslint-disable react/jsx-pascal-case */
import Link from '../link/Link';
import Logo from '../logo/Logo';

import * as Styled from './styles';

const Header = () => {
  const linkTitle = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы', 'Сертификаты'];
  return (
    <Styled.header>
      <Logo />
      {linkTitle.map((text, i) => (
        <Link key={i} text={text} />
      ))}
      ;
    </Styled.header>
  );
};

export default Header;
