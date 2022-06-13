import React, { FC } from 'react';
import './FooterCompany.css';

interface FooterCompanyProps {}

const FooterCompany: FC<FooterCompanyProps> = () => (
  <div className="FooterCompany" data-testid="FooterCompany">
    <ul>
      <li className='title'>Company</li>
      <li>About</li>
      <li>Blog</li>
      <li>Press</li>
    </ul>
  </div>
);

export default FooterCompany;
