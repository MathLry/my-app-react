import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FooterCompany from './FooterCompany';

describe('<FooterCompany />', () => {
  test('it should mount', () => {
    render(<FooterCompany />);
    
    const footerCompany = screen.getByTestId('FooterCompany');

    expect(footerCompany).toBeInTheDocument();
  });
});