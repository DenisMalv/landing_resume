
// import { softSkills } from "../../utils/data"

import { languages } from "../../utils/data"

const Languages = ()=>{
    return  (
        <div>
            <ul>
                {languages.map(({id,name,level})=><li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}

export default Languages