

const ProjectsItem = ({id,img,title,technologies,description}) =>{

    return (
        <li>
            <img src={img} alt={title} />
            <div>
                <p>{title}</p>
                <p>{technologies}</p>
                <p>{description}</p>
            </div>
        </li>
    )
}

export default ProjectsItem