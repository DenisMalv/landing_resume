
import { softSkills } from "../../utils/data"

const SoftSkills = ()=>{
    return  (
        <div>
            <ul>
                {softSkills.map(({id,text})=><li key={id}>{text}</li>)}
            </ul>
        </div>
    )
}

export default SoftSkills