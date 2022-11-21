// import {useState,useEffect,useRef} from 'react'

import ContactLink from '../CoreComponents/SvgLink';

import { socialLinks } from '../../utils/data'

const Header = () =>{

console.log(socialLinks);
    return(
        <header className='App-header__q'>
            <ul>
                {socialLinks.map(({id,link,svgSprite,svgHash}) =><ContactLink id={id}link={link} svgSprite={svgSprite} svgHash={svgHash} key={id}/>)}
            </ul>
        </header> 
    )
}

export default Header