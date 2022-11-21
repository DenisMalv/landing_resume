// import {useState,useEffect,useRef} from 'react'

import Button from '../CoreComponents/Button'
import img from '../../utils/img_imports'

const Hero = () =>{


    return(
        <section className="hero">
            <h1>Hello! I’m Denis Malniev!</h1>
            <h3>Frontend (React.js) Developer</h3>
            <Button className={''} text={'Contact me'} type={'button'}/>
            <Button className={''} text={'Download CV'} type={''}/>
            <img src={img.denisHero} alt="" />
            <svg>
                <use></use>
            </svg>
        </section> 
    )
}

export default Hero