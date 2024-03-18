import React from 'react'
import fahrRad from '../assets/fahrrad.png'
const Bikerental = () => {
  return (
    <div className='bikerental'>
<img src={fahrRad} alt='fahrrad'width={637} />
<div className='bikerental_text'>
<h3>Прокат велосипедов</h3>
<p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды.
     Как раз мы находимся в прекрасном парке!</p>

    </div>
    </div>
  )
}

export default Bikerental