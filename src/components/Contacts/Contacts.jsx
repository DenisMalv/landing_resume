// import {useState,useEffect,useRef} from 'react'

import ContactLink from '../CoreComponents/SvgLink'

import { socialLinks } from '../../utils/data'
import Button from '../CoreComponents/Button'

import img from '../../utils/img_imports'


const Contacts = () =>{


    return(
        <section>
            <div>
                <div>
                    <h2>Contacts</h2>
                    <a href="https://github.com/DenisMalv/" type='tel'>+380984733446</a>
                    <a href="https://github.com/DenisMalv/" type='email'>denis.malniev@gmail.com</a>
                    <ul>
                        {socialLinks.map(({id,link,svgSprite,svgHash})=> <ContactLink id={id}link={link} svgSprite={svgSprite} svgHash={svgHash} key={id}/>)}
                    </ul>
                    <Button className={''} text={'Contact me'} type={'button'}/>
                </div>
                <img src={img.denisContacts} alt="" />
            </div>
        </section>
    )
}

export default Contacts