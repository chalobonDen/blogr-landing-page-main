import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="header">
      <div className="bg-pattern"></div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
