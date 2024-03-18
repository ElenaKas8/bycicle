import React from 'react';
import ourPropositions from '../assets/our-proposition.png';


const Proposition = () => {
  return (
    <div className='proposition'>
      <div className='proposition-wrapper'>
        <h2>Что мы предлагаем</h2>
        <p className='paragraf'>
          В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.
          Все работы выполняем качественно и с душой.
        </p>
      </div> 
        <img src={ourPropositions} alt="ourPropositions" width={510} height={630} />  
    </div>
  );
}

export default Proposition;
