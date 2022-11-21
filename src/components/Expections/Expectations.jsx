// import {useState,useEffect,useRef} from 'react'

import ExpectationsItem from '../CoreComponents/ExpectationsItem'
import { expectationItems } from '../../utils/data'


const Expectations = () =>{

    return(
        <section className="search">
            <h2>I’m looking for ..</h2>
            <ul>
                {expectationItems.map(elem=><ExpectationsItem type={elem.type} text={elem.text} key={elem.id}/>)}
            </ul>
        </section>
    )
}

export default Expectations