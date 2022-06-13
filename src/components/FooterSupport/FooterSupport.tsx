import React, { FC } from 'react';
import './FooterSupport.css';

interface FooterSupportProps {}

const FooterSupport: FC<FooterSupportProps> = () => (
  <div className="FooterSupport" data-testid="FooterSupport">
    <ul>
      <li className='title'>Support</li>
      <li>Help</li>
      <li>Advisories</li>
      <li>Status</li>
      <li>Contact npm</li>
    </ul>
  </div>
);

export default FooterSupport;
