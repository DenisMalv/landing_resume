// import {useState,useEffect,useRef} from 'react'

import ContactLink from '../CoreComponents/SvgLink';
import MainContainer from 'components/CoreComponents/MainContainer';

import { socialLinks } from '../../utils/data'

const Header = () =>{

console.log(socialLinks);
    return(
        
            <header className='header'>
                <MainContainer>
                    <ul className='header list'>
                        {socialLinks.map(({id,link,svgSprite,svgHash}) =><ContactLink id={id}link={link} svgSprite={svgSprite} svgHash={svgHash} key={id}/>)}
                    </ul>
                </MainContainer>
            </header> 
        
    )
}

export default Header