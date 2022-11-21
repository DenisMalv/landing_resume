// import {useState,useEffect,useRef} from 'react'

import ProjectsItem from '../CoreComponents/ProjectsItem'
import { projects } from '../../utils/data'


const Projects = () =>{


    return(
        <section>
            <div>
                <ul>
                    {projects.map(({id,img,title,technologies,description})=>
                        <ProjectsItem id={id} img={img} title={title} technologies={technologies} description={description} key={id}/>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default Projects