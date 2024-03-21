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



// import React, { useState } from "react";

// function Services(props) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="services"
//       style={{
//         backgroundColor: props.backgroundColor,
//         borderLeft: isHovered ? props.border : "none", // добавляем border только при наведении
//         transition: "border-left 0.3s ease", // добавляем анимацию сюда
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="services-content">
//         <div className="services-border"></div>
//         <h3>{props.title}</h3>
//       </div>
//     </div>
//   );
// }

// export default Services;
