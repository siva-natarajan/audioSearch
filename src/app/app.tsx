import React from 'react';
import './app.css';
import Footer from './footer';
import Header from './header';
import HomePage from './homePage';

const App = () => {
  return (
    <div className="pageContainer">
      <Header />
      <div className="content">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
