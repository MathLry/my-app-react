import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FooterSupport from './FooterSupport';

describe('<FooterSupport />', () => {
  test('it should mount', () => {
    render(<FooterSupport />);
    
    const footerSupport = screen.getByTestId('FooterSupport');

    expect(footerSupport).toBeInTheDocument();
  });
});