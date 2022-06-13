import React, { FC } from 'react';
import './HomePage.css';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage" data-testid="HomePage">
    HomePage Component
  </div>
);

export default HomePage;
