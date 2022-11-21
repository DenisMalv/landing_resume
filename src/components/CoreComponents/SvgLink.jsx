

const ContactLink = ({link,svgSprite,svgHash}) =>{
    return (
        <li>
            <a href={link}>
                <svg width="30" height="30">
                    <use href={svgSprite + svgHash}></use>
                </svg>
            </a>
        </li>
    )
}

export default ContactLink