import React, { FC } from 'react';
import './HeaderAboutMe.scss';
import { BiPhone } from 'react-icons/bi';

interface HeaderAboutMeProps {}

const HeaderAboutMe: FC<HeaderAboutMeProps> = () => (
  <div className="HeaderAboutMe" data-testid="HeaderAboutMe">
    <BiPhone />
    About me
  </div>
);

export default HeaderAboutMe;
