

const TechSkillsItem = ({name,svgSprite,svgHash})=>{
    return(
        <li>
            <svg width="30" height="30">
                <use href={svgSprite + svgHash}></use>
            </svg>
            <p>{name}</p>
        </li>
    )
}

export default TechSkillsItem