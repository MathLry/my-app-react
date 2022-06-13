import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FooterTermsAndPolicies from './FooterTermsAndPolicies';

describe('<FooterTermsAndPolicies />', () => {
  test('it should mount', () => {
    render(<FooterTermsAndPolicies />);
    
    const footerTermsAndPolicies = screen.getByTestId('FooterTermsAndPolicies');

    expect(footerTermsAndPolicies).toBeInTheDocument();
  });
});