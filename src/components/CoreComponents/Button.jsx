
const Button = ({className,text,style})=>{
    return (
       <button className={`btn ${className}`} style={style}>{text}</button>
    )

}

export default Button