import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderAboutMe from './HeaderAboutMe';

describe('<HeaderAboutMe />', () => {
  test('it should mount', () => {
    render(<HeaderAboutMe />);
    
    const headerAboutMe = screen.getByTestId('HeaderAboutMe');

    expect(headerAboutMe).toBeInTheDocument();
  });
});