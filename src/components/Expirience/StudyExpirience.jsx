import { studyExpirience } from "../../utils/data";
import ExperienceItem from "../CoreComponents/ExperienceItem";

const StudyExpirience = () =>{
    return (
        <ul>
            {studyExpirience.map(({id,type,company,position,from,to,country})=>
                <ExperienceItem id={id} type={type} company={company} position={position} from={from} to={to} country={country} key={id}/>
            )}
        </ul>
    )
}

export default StudyExpirience