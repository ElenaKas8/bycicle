import React from 'react';

const Services = (props) => {
  const { border, title, backgroundColor } = props;
  return (
    <div className='services' style={{ backgroundColor }}>
      <div className='services-content'>
        <div className='services-border' style={{ border }}></div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Services;

