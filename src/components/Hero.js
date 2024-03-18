import React from 'react'
import imgDino from '../assets/dino.png'
const Hero = () => {
  return (
    <div className='hero'>       
      <h1>Веломастерская "Велозор"</h1>
      <div className='hero_container'>
      <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься
         и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>

      <img src={imgDino} alt="dino" width={467}/>
      </div>
    </div>
  )
}
export default Hero