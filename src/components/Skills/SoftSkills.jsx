import ListItem from "components/CoreComponents/ListItem"
import { softSkills } from "../../utils/data"

const SoftSkills = ()=>{
    return  (
        <div className="skills-soft__wrapper">
            <h2 className='skills__title'>Soft Skills</h2>
            <ul className="skills-soft__list list">
                {softSkills.map(({id,text})=><ListItem wrapClass={'skills-soft__item'} key={id} text={text}/>)}
            </ul>
        </div>
    )
}

export default SoftSkills