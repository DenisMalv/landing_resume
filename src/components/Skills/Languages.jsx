
// import { softSkills } from "../../utils/data"

import { languages } from "../../utils/data"

const Languages = ()=>{
    return  (
        <div>
            <h2 className='skills__title'>Langusages</h2>
            <ul>
                {languages.map(({id,name,level})=><li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}

export default Languages