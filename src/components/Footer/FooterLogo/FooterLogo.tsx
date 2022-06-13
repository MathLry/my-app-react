import React, { FC } from 'react';
import './FooterLogo.css';
import { SiNpm, SiGithub } from 'react-icons/si';

interface FooterLogoProps {}

const FooterLogo: FC<FooterLogoProps> = () => (
  <div className="FooterLogo" data-testid="FooterLogo">
    <SiNpm className='LogoNpm'/>
    <SiGithub className='LogoGithub'/>
  </div>
);

export default FooterLogo;
