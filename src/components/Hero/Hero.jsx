// import {useState,useEffect,useRef} from 'react'

import Button from '../CoreComponents/Button'
import img from '../../utils/img_imports'

const Hero = () =>{


    return(
        <section className="hero">
            <div className='wrapper wrapper__hero'>
                <div className=''>
                    <h1 className='title title__hero'>Hello! I’m Denis Malniev!</h1>
                    <h3 className='subtitle '>Frontend (React.js) Developer</h3>
                    <Button className={'btn btn--accent '} text={'Contact me'} type={'button'}/>
                    <Button className={'btn btn__border--accent ml-28'} text={'Download CV'} type={'button'}/>
                </div>
                <img className='hero__img' src={img.denisHero} alt="" />
            </div>
            
            {/* <svg>
                <use></use>
            </svg> */}
        </section> 
    )
}

export default Hero