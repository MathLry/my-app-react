import React, { FC } from 'react';
import './HeaderHome.scss';

interface HeaderHomeProps {}

const HeaderHome: FC<HeaderHomeProps> = () => (
  <div className="HeaderHome" data-testid="HeaderHome">
    HeaderHome Component
  </div>
);

export default HeaderHome;
