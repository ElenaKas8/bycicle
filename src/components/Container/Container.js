// Container.js
import React from 'react';
import './Container.css'; 


const Container = ({backgroundColor, children }) => {
  return (
    <div style={{ backgroundColor }} className="container">
      {children}
    </div>
  );
}

export default Container;
