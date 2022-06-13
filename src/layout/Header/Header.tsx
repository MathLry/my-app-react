import React, { FC } from 'react';
import './Header.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div data-testid="Header">
    Header Component
  </div>
);

export default Header;
