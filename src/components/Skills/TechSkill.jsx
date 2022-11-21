import { techSkills } from "../../utils/data"
import TechSkillsItem from "../CoreComponents/TechSkillsItem"

const TechSkills = ()=>{
    return  (
        <div>
            <h2>Tech Skills</h2>
            <ul>
                {techSkills.map(({id,name,svgSprite,svgHash})=>
                    <TechSkillsItem id={id}name={name}svgSprite={svgSprite} svgHash={svgHash} key={id}/>)}
            </ul>
        </div>
    )
}

export default TechSkills