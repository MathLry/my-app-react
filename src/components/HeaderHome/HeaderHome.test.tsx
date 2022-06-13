import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderHome from './HeaderHome';

describe('<HeaderHome />', () => {
  test('it should mount', () => {
    render(<HeaderHome />);
    
    const headerHome = screen.getByTestId('HeaderHome');

    expect(headerHome).toBeInTheDocument();
  });
});