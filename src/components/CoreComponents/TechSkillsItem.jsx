

const TechSkillsItem = ({name,svgSprite,svgHash,wrapClass,idx})=>{

    const itemPositions = (id)=>{
        const possitionsArray  = [
            {id:0,top:'10px',left:'10px'},
            {id:1,top:'10px',left:'100px'},
            {id:2,top:'10px',left:'200px'},
            {id:3,top:'10px',left:'300px'},
            {id:4,top:'10px',left:'400px'},
            {id:5,top:'150px',left:'10px'},
            {id:6,top:'150px',left:'100px'},
            {id:7,top:'150px',left:'200px'},
            {id:8,top:'150px',left:'300px'},
            {id:9,top:'150px',left:'400px'},
            {id:10,top:'300px',left:'10px'},
        ]
        return possitionsArray[id]
    }

    return(
        <li className={wrapClass ? wrapClass : '' } style={itemPositions(idx)}>
            <div className="icon__wrapper">
                <svg className="tech__item__icon" width="30" height="30">
                    <use href={svgSprite + svgHash}></use>
                </svg>
            </div>
            <p className="tech__item__name">{name}</p>
        </li>
    )
}

export default TechSkillsItem