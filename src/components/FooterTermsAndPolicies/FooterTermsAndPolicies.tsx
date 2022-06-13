import React, { FC } from 'react';
import './FooterTermsAndPolicies.css';

interface FooterTermsAndPoliciesProps {}

const FooterTermsAndPolicies: FC<FooterTermsAndPoliciesProps> = () => (
  <div className="FooterTermsAndPolicies" data-testid="FooterTermsAndPolicies">
    <ul>
      <li className='title'>Terms & Policies</li>
      <li>Policies</li>
      <li>Terms of Use</li>
      <li>Code of Conduct</li>
      <li>Privacy</li>
    </ul>
  </div>
);

export default FooterTermsAndPolicies;
