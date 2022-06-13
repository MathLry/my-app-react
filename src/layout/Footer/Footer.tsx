import React, { FC } from 'react';
import './Footer.css';

import FooterLogo from '../../components/Footer/FooterLogo/FooterLogo';
import FooterSupport from '../../components/FooterSupport/FooterSupport';
import FooterCompany from '../../components/Footer/FooterCompany/FooterCompany';
import FooterTerms from '../../components/FooterTermsAndPolicies/FooterTermsAndPolicies';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => (
  <div className="FooterLayout" data-testid="Footer">
    <FooterLogo />
    <FooterSupport />
    <FooterCompany />
    <FooterTerms />
  </div>
);

