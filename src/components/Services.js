import React from 'react';

const Services = (props) => {
  const { title, backgroundColor } = props;
  return (
    <div className='services' style={{ backgroundColor }}>
      <div className='services-content'>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Services;



