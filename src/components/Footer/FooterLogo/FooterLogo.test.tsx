import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FooterLogo from './FooterLogo';

describe('<FooterLogo />', () => {
  test('it should mount', () => {
    render(<FooterLogo />);
    
    const footerLogo = screen.getByTestId('FooterLogo');

    expect(footerLogo).toBeInTheDocument();
  });
});