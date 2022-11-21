
const ExperienceItem = ({id,type,company,position,from,to,country})=>{
    return (
        <li>
            <p>{company}</p>
            <p>{position}</p>
            <p>{from + to + ' | ' + country}</p>
        </li>
    )

}

export default ExperienceItem